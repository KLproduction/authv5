import { LoginForm } from '@/components/auth/LoginForm'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const loginPage = async() => {
  const session = await auth()
  if (session){
    redirect("/")
  }

  return (
    <>
    <LoginForm/>
    
    </>
  )
}

export default loginPage