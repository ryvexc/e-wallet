import { Toaster } from "../ui/toaster"

export default function PageLayout({ children, className }: { children: React.ReactNode, className: string | undefined | "" }): JSX.Element {
  return <div className={"w-full h-screen p-6 " + className} >
    {children}
  </div>
}