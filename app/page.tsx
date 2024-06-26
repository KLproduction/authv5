import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButtonProps } from "@/components/auth/loginBtn";
import { GoogleSignIn } from "@/components/auth/GoogleSignIn";
import { GitSignIn } from "@/components/auth/GitSignIn";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { revalidatePath } from "next/cache";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default async function Home() {

    revalidatePath("/")
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-200">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md mb-5",
          font.className,
        )}>
        Login
        </h1>
        <div>
          <LoginButtonProps mode="modal" asChild>
            <Button variant={"secondary"} size={"lg"}>Sign In</Button>
          </LoginButtonProps>
        </div>
        <GoogleSignIn/>
        <GitSignIn/>

      </div>
    </main>
  );
}
