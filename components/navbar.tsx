import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Separator } from "./ui/separator"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { faBell, faDashboard, faGear, faHistory, faHouse, faMagnifyingGlass, faMoneyBill, faMoneyBillWave, faNoteSticky, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router";
import nookies from "nookies";
import { useEffect } from "react";
import Link from "next/link";

export default function Navbar({ userdata, active }: any): JSX.Element {
  const router = useRouter();

  const logout = (e: any) => {
    nookies.destroy(null, 'token');
    nookies.destroy(null, 'user');
    router.replace("/login");
  }

  // expanded
  return <div className="h-screen inline-flex bg-white dark:bg-neutral-950">
    <div className="flex flex-col px-5">
      {/* <h1 className="py-3 text-lg font-semibold">Ryve Banking</h1>
      <Separator /> */}
      <div className="flex items-center gap-3 py-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/nopfp.jpg" />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
        <div>
          {/* <h1 className="font-semibold text-lg">{userdata.firstname + " " + userdata.lastname}</h1> */}
          <h1 className="font-semibold text-lg min-w-[150px]">{userdata.name}</h1>
        </div>
      </div>
      <Separator />
      <div className="grid gap-3 py-3 pb-2">
        <h1 className="text-xs font-extralight tracking-wider">MENU</h1>
        <div className="grid gap-2">
          <Link href="/" className={"flex items-center gap-3 p-2 menu-hover duration-75 " + (active == "home" && "menu-active")}>
            <FontAwesomeIcon icon={faNoteSticky} className="text-xl" />
            <h1 className="text-sm">Notes</h1>
          </Link>
          <Link href="/search" className={"flex items-center gap-3 p-2 menu-hover duration-75 " + (active == "search" && "menu-active")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
            <h1 className="text-sm">Search</h1>
          </Link>
        </div>
      </div>
      <Separator />
      <div className="grid gap-3 py-2">
        <div className="grid gap-2">
          <Link href="/settings" className={"flex items-center gap-3 p-2 menu-hover duration-75 " + (active == "settings" && "menu-active")}>
            <FontAwesomeIcon icon={faGear} className="text-xl" />
            <h1 className="text-sm">Settings</h1>
          </Link>
        </div>
      </div>
      <Separator />
      <div className="grid gap-3 py-2">
        <div className="grid gap-1">
          <AlertDialog>
            <AlertDialogTrigger asChild className="p-0 duration-75">
              <div className="flex items-center gap-3 p-2 menu-hover">
                <FontAwesomeIcon icon={faRightFromBracket} className="text-xl rotate-180" />
                <h1 className="text-sm">Log Out</h1>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to Logout?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will logout and you need to Login after this.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={logout}>Logout</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
    <Separator orientation="vertical" />
  </div>
}