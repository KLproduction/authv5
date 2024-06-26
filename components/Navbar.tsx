

import Link from "next/link";
import { Button } from "./ui/button";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { SignOut } from "./auth/SignOut";
import { LoginButtonProps } from "./auth/loginBtn";







const navList = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Dashboard",
        path: "/server",
    },
    {
        label: "ToDo",
        path: "/todo",
    },

];

const Navbar = async() => {

  const session = await auth()

  return (
    <nav className='sticky z-[100] h-30 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <ul className='flex items-center justify-around'>
        {navList.map(({ label, path }) => (
          <li key={label}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
        {!session ? 
        <div className="flex gap-3 items-center p-3">
          <LoginButtonProps mode="modal" asChild>
            <Button variant={"default"} size={"lg"}>Sign In</Button>
          </LoginButtonProps>
          <div className=" border-r border-zinc-800"/>
          <Link href={"/auth/register"} className=" text-gray-500">Sign up</Link>

        </div>
        :
          <div className="flex gap-3 items-center justify-center p-3">
            <p>Hello {session?.user?.name}</p>
            <SignOut/>
          </div>

      }

      </ul>
    </nav>
  );
};

export default Navbar;
