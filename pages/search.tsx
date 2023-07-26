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

  const [field, setField] = useState<{ input?: string }>();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(field?.input);
    setLoading(true);
    setError(false);
    setData([]);

    fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        getAll: true
      })
    }).then(response => {
      if (!response.ok) setError(true);
      return response.json();
    }).then((data: any) => {
      if (!field?.input) setData(data);
      else setData(data.filter((note: any) => note.title.toLowerCase().includes(field?.input?.toLowerCase())));
      setLoading(false);
    });
  }, [field])

  const updateField = (e: any) => {
    setField({
      ...field,
      [e.target.name]: e.target.value
    })
  }

  return <RootLayout className="flex">
    <Navbar userdata={userdata} active="search" />
    <PageLayout className="p-8">
      <div className="flex justify-between">
        <input placeholder="Search..." name="input" className="font-semibold text-xl dark:placeholder-neutral-700 placeholder-neutral-400 bg-transparent outline-none border-none w-full" onChange={updateField} />
      </div>
      <Separator className="my-4"></Separator>
      <div className="flex flex-wrap min-w-full justify-stretch items-strecth gap-4">
        {(isLoading && !error) && <h1>Loading...</h1>}
        {(!isLoading && !error) && (
          data.length > 0 ?
            data.map((note: any) => {
              return <AlertDialog key={note._id}>
                <AlertDialogTrigger asChild>
                  <Card className="cursor-pointer duration-500 flex-1 w-full h-full min-w-[300px]">
                    <CardHeader className="p-4 dark:hover:bg-neutral-900 hover:bg-neutral-50 hover:text-neutral-900 duration-75 rounded-lg dark:hover:text-neutral-300 cursor-pointer">
                      <CardTitle className="text-lg">
                        <p>{note.title}</p>
                        <p className="text-xs text-neutral-700 font-normal -mt-1">{note.owner}</p>
                      </CardTitle>
                      <CardDescription className="w-full justify-between flex">
                        <p className="text-xs line-clamp-1 w-3/5">{note.description}</p>
                        <p className="text-xs pl-3 min-w-[100px]">{note.createdAt}</p>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-6xl h-[80%] max-h-[80%]">
                  <AlertDialogHeader className="h-full">
                    <AlertDialogTitle className="text-2xl">
                      <input disabled placeholder="Note Title here..." name="title" className="dark:placeholder-neutral-700 placeholder-neutral-400 bg-transparent outline-none border-none w-full" onChange={updateField} defaultValue={note.title} />
                      <p className="text-[12px] -mt-1 text-neutral-500 font-normal">Author: {note.owner}</p>
                      <p className="text-[12px] -mt-4 text-neutral-500 font-normal">Created At: {note.createdAt}</p>
                      <p className="text-[12px] -mt-4 text-neutral-500 font-normal">Last Modified: {note.updatedAt}</p>
                    </AlertDialogTitle>
                    <Separator />
                    <AlertDialogDescription>
                      <textarea disabled placeholder="Note Description here..." name="description" onChange={updateField} cols={100} rows={17} className="dark:placeholder-neutral-700 placeholder:placeholder-neutral-500 text-neutral-700 dark:text-neutral-200 bg-transparent h-full outline-none resize-none w-full" defaultValue={note.description} />
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>
                      Back
                    </AlertDialogCancel>
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
  </RootLayout>
}