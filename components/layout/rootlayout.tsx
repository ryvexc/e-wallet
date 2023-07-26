import { Toaster } from "../ui/toaster"

export default function RootLayout({ children, className }: { children: React.ReactNode, className: string | undefined | "" }): JSX.Element {
  return <div className={"w-full h-screen " + className} >
    {children}
    <Toaster />
  </div>
}