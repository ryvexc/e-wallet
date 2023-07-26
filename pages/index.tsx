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

    </PageLayout>
  </RootLayout >
}