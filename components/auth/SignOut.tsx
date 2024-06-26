// import { signOut } from "../auth"
// import { Button } from "./ui/button"
import { signOut } from "@/auth" 
import { Button } from "../ui/button"

export function SignOut() {

  return (
    <form
    action={async () => {
      "use server"
      await signOut({redirectTo:"/"})
      
      }}
    >
        <Button asChild>
             <button type="submit">Sign Out</button>
        </Button>
    </form>
  )
}