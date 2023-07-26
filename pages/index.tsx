import PageLayout from "@/components/layout/pagelayout";
import RootLayout from "@/components/layout/rootlayout";
import Navbar from "@/components/navbar";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import nookies from "nookies";
import { useEffect, useState } from "react";

export async function getServerSideProps(ctx: any) {
  return {
    props: {
      userdata: JSON.parse(nookies.get(ctx).user)
    }
  }
}

export default function Dashboard({ userdata }: any): React.ReactNode {
  const { toast } = useToast()

  const [field, setField] = useState<{ title?: string | undefined, description?: string | undefined }>();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const reFetchData = () => {
    setLoading(true);
    setError(false);
    setData([]);

    fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        owner: userdata.name,
      })
    }).then(response => {
      if (!response.ok) setError(true);
      return response.json();
    }).then((data: any) => {
      setData(data);
      setLoading(false);
    });
  }

  useEffect(() => { reFetchData() }, [])

  const updateField = (e: any) => {
    setField({
      ...field,
      [e.target.name]: e.target.value
    })
  }

  const handleSaveNote = (id: number) => {
    if (!field?.title || !field?.description) {
      toast({
        title: "Hello?",
        description: "Content must be filled, retry.",
      })
      return;
    }

    fetch("/api/savenote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        title: field!.title,
        description: field!.description,
        userid: userdata._id,
      })
    }).then(response => {
      if (response.ok) {
        toast({
          title: "Saved Successfully",
          description: "Your data is saved successfully",
        });
        reFetchData();
      }
      else toast({
        title: "Error Occured :(",
        description: "Try again later...",
      });
    });

    setField({ title: "", description: "" });
  }

  const handleDeleteNote = (id: number) => {
    if (!field?.title || !field?.description) {
      toast({
        title: "Hello?",
        description: "Content must be filled, retry.",
      })
      return;
    }

    fetch("/api/deletenote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
      })
    }).then(response => {
      if (response.ok) {
        toast({
          title: "Deleted Successfully",
          description: "Your data is deleted successfully",
        });
        reFetchData();
      }
      else toast({
        title: "Error Occured :(",
        description: "Try again later...",
      });
    });

    setField({ title: "", description: "" });
  }

  const handleAddNote = () => {
    fetch("/api/addnote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: field!.title,
        description: field!.description,
        owner: userdata.name,
      })
    }).then(response => {
      if (response.ok) {
        toast({
          title: "Added Successfully",
          description: "Your data is added successfully",
        });
        reFetchData();
      }
      else toast({
        title: "Error Occured :(",
        description: "Try again later...",
      });
    });

    setField({ title: "", description: "" });
  }

  return <RootLayout className="flex">
    <Navbar userdata={userdata} active="home" />
    <PageLayout className="p-8">
      <div className="flex justify-between">
        <h1 className="text-3xl dark:text-white text-black font-semibold">My Notes</h1>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="p-3 group">
              <FontAwesomeIcon icon={faPlus} className='group-hover:rotate-90 duration-700' />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="max-w-6xl h-[80%] max-h-[80%]">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl">
                <input placeholder="Note Title here..." name="title" className="dark:placeholder-neutral-700 placeholder-neutral-400 bg-transparent outline-none border-none w-full" onChange={updateField} />
              </AlertDialogTitle>
              <Separator />
              <AlertDialogDescription>
                <textarea placeholder="Note Description here..." name="description" onChange={updateField} cols={100} rows={19} className="dark:placeholder-neutral-700 placeholder:placeholder-neutral-500 text-neutral-700 dark:text-neutral-200 bg-transparent h-full outline-none resize-none w-full" />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={e => handleAddNote()}>Save</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <Separator className="my-4"></Separator>
      <div className="flex flex-wrap min-w-full justify-stretch items-strecth gap-4">
        {(isLoading && !error) && <h1>Loading...</h1>}
        {(!isLoading && !error) && (
          data.length > 0 ?
            data.map((note: any) => {
              return <AlertDialog key={note._id}>
                <AlertDialogTrigger asChild onClick={e => setField({ title: note.title, description: note.description })}>
                  <Card className="cursor-pointer duration-500 flex-1 w-full h-full min-w-[300px]">
                    <CardHeader className="p-4 dark:hover:bg-neutral-900 hover:bg-neutral-50 hover:text-neutral-900 duration-75 rounded-lg dark:hover:text-neutral-300 cursor-pointer">
                      <CardTitle className="text-lg">{note.title}</CardTitle>
                      <CardDescription className="w-full justify-between flex">
                        <p className="text-xs line-clamp-1 w-4/5">{note.description}</p>
                        <p className="text-xs pl-3">{note.createdAt}</p>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-6xl h-[80%] max-h-[80%]">
                  <AlertDialogHeader className="h-full">
                    <AlertDialogTitle className="text-2xl">
                      <input placeholder="Note Title here..." name="title" className="dark:placeholder-neutral-700 placeholder-neutral-400 bg-transparent outline-none border-none w-full" onChange={updateField} defaultValue={note.title} />
                    </AlertDialogTitle>
                    <Separator />
                    <AlertDialogDescription>
                      <textarea placeholder="Note Description here..." name="description" onChange={updateField} cols={100} rows={19} className="dark:placeholder-neutral-700 placeholder:placeholder-neutral-500 text-neutral-700 dark:text-neutral-200 bg-transparent h-full outline-none resize-none w-full" defaultValue={note.description} />
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <div className="w-full justify-between flex items-center">
                      <p className="text-sm">Last Modified - {note.updatedAt.replace(",", " at")}</p>
                      <div className="flex gap-2">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={e => handleDeleteNote(note._id)} className="p-0">
                          <h1 className="text-white bg-red-500 w-full h-full p-3 flex items-center justify-center px-4 rounded">Delete</h1>
                        </AlertDialogAction>
                        <AlertDialogAction onClick={e => handleSaveNote(note._id)}>Save</AlertDialogAction>
                      </div>
                    </div>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            }) : <h1 className="">Empty!</h1>
        )}
        {(!isLoading && error) && (
          <h1 className="text-red-500">Error.</h1>
        )}
      </div>
    </PageLayout>
  </RootLayout >
}