"use client"

import { useRouter } from "next/navigation"
import { useCurrentUser } from "@/hooks/use-current-user"
import { UserInfo } from "@/components/UserInfo"


const ClientPage = () => {
  const user = useCurrentUser()
  const route = useRouter()
  if(!user){
    route.push("/auth/login")
  }
  return (
    <UserInfo user={user} label="Client componet"/>
  )
}

export default ClientPage