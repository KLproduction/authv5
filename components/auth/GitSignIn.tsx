
import { signIn } from "@/auth"
import { Button } from "../ui/button"
 
export function GitSignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <Button asChild>
       <button type="submit">Signin with GitHub</button>

      </Button>
    </form>
  )
} 