"use client"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useState } from "react"

const LoginForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push("/dashboard")
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200 bg-white"
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Password</label>
          <a href="#" className="text-xs text-blue-950 font-medium hover:underline">Forgot password?</a>
        </div>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200 bg-white"
        />
      </div>

      {error && (
        <p className="text-red-500 text-xs font-medium bg-red-50 px-3 py-2 rounded-lg">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 bg-blue-950 text-white font-bold text-sm py-3 rounded-lg hover:bg-blue-900 transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>

    </form>
  )
}

export default LoginForm
