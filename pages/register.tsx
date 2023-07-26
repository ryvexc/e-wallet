import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useEffect, useLayoutEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@radix-ui/react-toast"
import { Toaster } from "@/components/ui/toaster"
import nookies from "nookies";
import RootLayout from "@/components/layout/rootlayout"
import { useRouter } from "next/router";
import Link from "next/link"

export async function getServerSideProps(ctx: any) {
  const cookies = nookies.get(ctx);

  if (cookies.token && cookies.user) return {
    redirect: {
      destination: '/'
    }
  }

  return { props: {} }
}

export default function Register(): React.ReactNode {
  const { toast } = useToast();
  const router = useRouter();

  const [field, setField] = useState<any>({});

  const setValue = (e: any) => {
    setField({
      ...field,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async (e: any) => {
    e.preventDefault();

    const request = await fetch(`/api/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...field,
      })
    });

    const response = await request.json();

    if (response.error?.status == 400) toast({
      title: "Error!",
      description: "Some fields are missing.",
    });
    else {
      router.replace("/login");
    }

    console.log("response:", response);
  }

  return <RootLayout className="flex justify-center items-center">
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="text-center">Register</CardTitle>
        <CardDescription className="text-center">Help us to identify who are you.</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="p-4">
        <form onChange={setValue}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" required placeholder="Insert your email here" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" name="name" required placeholder="Insert your full name here" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="lastname">Password</Label>
              <Input id="lastname" type="password" name="password" required placeholder="Insert your password" />
            </div>
          </div>
        </form>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-start items-start flex-col gap-2 p-4">
        <Button className="w-full" onClick={handleRegister}>Register -&gt;</Button>
        <Link href="/login" className='text-xs text-blue-500 text-left'>Have account already? login!</Link>
      </CardFooter>
    </Card>
  </RootLayout>
}