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
import Link from "next/link"
import { useRouter } from "next/router"
import { Skeleton } from "@/components/ui/skeleton"

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
  const [loading, setLoading] = useState<boolean>(false);

  const setValue = (e: any) => {
    setField({
      ...field,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    console.log(field);
  }, [field])

  const handleLogin = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    const request = await fetch(`/api/auth`, {
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
      description: "Check your Email and Password",
    });
    else if (response.jwt) {
      nookies.set(null, 'token', JSON.stringify(response.jwt));
      nookies.set(null, 'user', JSON.stringify(response.user));
      router.replace("/");
    }

    setLoading(false);
  }

  return <RootLayout className="flex justify-center items-center">
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="text-center">Login</CardTitle>
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
              <Label htmlFor="lastname">Password</Label>
              <Input id="lastname" type="password" name="password" required placeholder="Insert your password" />
            </div>
          </div>
        </form>
      </CardContent>
      <Separator />
      <CardFooter className="p-4 flex flex-col gap-2 justify-start items-start">
        <Button className="w-full" onClick={handleLogin} disabled={loading}>{!loading ? <>Login -&gt;</> : <Skeleton className="w-14 h-3" />}</Button>
        <Link href="/register" className='text-xs text-blue-500 text-left'>Don't have account? register!</Link>
      </CardFooter>
    </Card>
  </RootLayout>
}