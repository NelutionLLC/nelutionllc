"use client"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2"

const SignOutButton = () => {
  const router = useRouter()

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:bg-white/10 hover:text-white transition-colors duration-200 w-full"
    >
      <HiOutlineArrowRightOnRectangle className="text-xl" />
      Sign Out
    </button>
  )
}

export default SignOutButton
