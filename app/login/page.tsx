import LoginForm from "./LoginForm"
import Link from "next/link"

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-blue-950 px-16 py-12">
        <Link href="/">
          <span className="text-white uppercase text-xl font-bold tracking-widest">Nelution</span>
        </Link>

        <div>
          <h2 className="text-white text-4xl font-black leading-tight mb-4">
            Your business,<br />online in minutes.
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Manage your website content, update hours, showcase your services, and more — all from one simple dashboard.
          </p>
        </div>

        <p className="text-white/30 text-xs">© {new Date().getFullYear()} Nelution LLC. All rights reserved.</p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
        <Link href="/" className="lg:hidden mb-10">
          <span className="text-blue-950 uppercase text-xl font-bold tracking-widest">Nelution</span>
        </Link>

        <div className="w-full max-w-sm">
          <h1 className="text-blue-950 text-3xl font-black mb-1">Welcome back</h1>
          <p className="text-gray-400 text-sm mb-8">Sign in to your Nelution account</p>
          <LoginForm />
          <p className="text-center text-sm text-gray-400 mt-6">
            Don&apos;t have an account?{" "}
            <a href="#contact" className="text-blue-950 font-semibold hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>

    </div>
  )
}

export default LoginPage
