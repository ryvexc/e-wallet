import PageLayout from "@/components/layout/pagelayout";
import RootLayout from "@/components/layout/rootlayout";
import Navbar from "@/components/navbar";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/router";
import nookies from "nookies";
import { useEffect, useState } from "react";

export async function getServerSideProps(ctx: any) {
  return {
    props: {
      userdata: JSON.parse(nookies.get(ctx).user),
    }
  }
}

export default function Settings({ userdata }: any): React.ReactNode {
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    setDarkmode(localStorage.getItem('theme') === "dark");
  }, [])

  const handleDarkModeChange = (state: boolean) => {
    if (state) localStorage.setItem("theme", "dark");
    else localStorage.setItem("theme", "light");

    setDarkmode(state);

    toast({
      title: "Theme changed successfully!",
      description: "Refresh your browser to take effect.",
      action: <Button onClick={e => window.location.reload()}>Refresh</Button>
    })
  }

  return <RootLayout className="flex w-full">
    <Navbar userdata={userdata} active="settings" />
    <PageLayout className="p-8 gap-8">
      <h1 className="text-3xl dark:text-white font-semibold text-black">Settings</h1>
      <Separator className="my-4"></Separator>
      <div className="flex items-center space-x-2">
        <Switch onCheckedChange={handleDarkModeChange} checked={!darkmode} id="airplane-mode" />
        <Label htmlFor="airplane-mode">Use Light Mode (Experimental)</Label>
      </div>
    </PageLayout>
  </RootLayout>
}