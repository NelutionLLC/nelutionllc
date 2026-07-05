import Link from "next/link"
import {
  HiOutlineUsers,
  HiOutlineGlobeAlt,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlineSquares2X2,
  HiOutlineBuildingStorefront,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2"
import SignOutButton from "./SignOutButton"

const stats = [
  {
    label: "Total Clients",
    value: "0",
    icon: <HiOutlineUsers className="text-2xl" />,
    color: "bg-blue-950",
  },
  {
    label: "Active Sites",
    value: "0",
    icon: <HiOutlineGlobeAlt className="text-2xl" />,
    color: "bg-emerald-600",
  },
  {
    label: "Pending Setup",
    value: "0",
    icon: <HiOutlineClock className="text-2xl" />,
    color: "bg-amber-500",
  },
  {
    label: "Monthly Revenue",
    value: "$0",
    icon: <HiOutlineCurrencyDollar className="text-2xl" />,
    color: "bg-violet-600",
  },
]

const sidebarLinks = [
  { label: "Dashboard", href: "/dashboard", icon: <HiOutlineSquares2X2 className="text-xl" />, active: true },
  { label: "Clients", href: "/dashboard/clients", icon: <HiOutlineBuildingStorefront className="text-xl" /> },
  { label: "Analytics", href: "/dashboard/analytics", icon: <HiOutlineChartBar className="text-xl" /> },
  { label: "Settings", href: "/dashboard/settings", icon: <HiOutlineCog6Tooth className="text-xl" /> },
]


const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 bg-blue-950 min-h-screen fixed top-0 left-0">
        {/* Logo */}
        <div className="px-6 h-[65px] flex items-center border-b border-white/10">
          <Link href="/">
            <span className="text-white uppercase text-lg font-bold tracking-widest">Nelution</span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1 px-3 py-6 flex-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200
                ${link.active ? "bg-white/15 text-white" : "text-white/60 hover:bg-white/10 hover:text-white"}`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="px-3 py-4 border-t border-white/10">
          <SignOutButton />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 lg:ml-60">

        {/* Top bar */}
        <header className="h-[65px] bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
          <div>
            <h1 className="text-blue-950 font-black text-lg">Dashboard</h1>
            <p className="text-gray-400 text-xs">Welcome back, Damber</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-950 flex items-center justify-center">
              <span className="text-white text-xs font-bold">DB</span>
            </div>
          </div>
        </header>

        <div className="px-8 py-8">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
                <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium">{stat.label}</p>
                  <p className="text-blue-950 text-2xl font-black">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* Recent clients table */}
            <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h2 className="text-blue-950 font-bold text-sm">Recent Clients</h2>
                <button className="text-xs text-blue-950 font-semibold hover:underline cursor-pointer">+ Add Client</button>
              </div>

              {/* Empty state */}
              <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <HiOutlineBuildingStorefront className="text-2xl text-gray-400" />
                </div>
                <p className="text-blue-950 font-semibold text-sm mb-1">No clients yet</p>
                <p className="text-gray-400 text-xs max-w-xs">
                  Once you onboard a client, they&apos;ll appear here with their site status and plan.
                </p>
                <button className="mt-5 bg-blue-950 text-white text-xs font-bold px-5 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-200 cursor-pointer">
                  Onboard First Client
                </button>
              </div>
            </div>

            {/* Quick actions */}
            <div className="flex flex-col gap-5">

              {/* Quick actions card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-blue-950 font-bold text-sm">Quick Actions</h2>
                </div>
                <div className="flex flex-col gap-1 p-3">
                  {[
                    { label: "Add New Client", icon: <HiOutlineUsers className="text-base" /> },
                    { label: "Manage Templates", icon: <HiOutlineSquares2X2 className="text-base" /> },
                    { label: "View Analytics", icon: <HiOutlineChartBar className="text-base" /> },
                    { label: "Settings", icon: <HiOutlineCog6Tooth className="text-base" /> },
                  ].map((action) => (
                    <button
                      key={action.label}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-600 font-medium hover:bg-gray-50 hover:text-blue-950 transition-colors duration-200 text-left cursor-pointer"
                    >
                      <span className="text-blue-950">{action.icon}</span>
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status card */}
              <div className="bg-blue-950 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <HiOutlineCheckCircle className="text-emerald-400 text-xl" />
                  <span className="text-white font-bold text-sm">Platform Status</span>
                </div>
                <p className="text-white/60 text-xs leading-relaxed mb-4">
                  All systems are operational. No incidents reported.
                </p>
                <div className="flex flex-col gap-2">
                  {["Website Builder", "Hosting", "Domain Manager"].map((s) => (
                    <div key={s} className="flex items-center justify-between">
                      <span className="text-white/70 text-xs">{s}</span>
                      <span className="text-xs font-semibold text-emerald-400">Operational</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
