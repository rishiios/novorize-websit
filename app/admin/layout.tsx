import Link from 'next/link'
import { logout } from './login/actions'
import { LayoutDashboard, FileText, IndianRupee, Users, MessageSquare, Briefcase, Settings, LogOut, ArrowLeft } from 'lucide-react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-surface border-r border-outline-variant flex-shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-outline-variant">
          <Link href="/admin" className="text-xl font-bold text-white tracking-tight">NAIZO<span className="text-primary">CMS</span></Link>
        </div>
        <nav className="p-4 space-y-1">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-white hover:bg-surface-bright rounded-md transition-colors">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link href="/admin/blogs" className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-white hover:bg-surface-bright rounded-md transition-colors">
            <FileText size={20} />
            Blogs
          </Link>
          <Link href="/admin/pricing" className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-white hover:bg-surface-bright rounded-md transition-colors">
            <IndianRupee size={20} />
            Pricing
          </Link>
          <Link href="/admin/team" className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-white hover:bg-surface-bright rounded-md transition-colors">
            <Users size={20} />
            Team
          </Link>
          <Link href="/admin/testimonials" className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-white hover:bg-surface-bright rounded-md transition-colors">
            <MessageSquare size={20} />
            Testimonials
          </Link>
          <Link href="/admin/case-studies" className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-white hover:bg-surface-bright rounded-md transition-colors">
            <Briefcase size={20} />
            Case Studies
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-white hover:bg-surface-bright rounded-md transition-colors">
            <Settings size={20} />
            Settings
          </Link>
        </nav>
        
        <div className="p-4 mt-auto border-t border-outline-variant">
          <form action={logout}>
            <button type="submit" className="flex items-center w-full gap-3 px-3 py-2 text-error hover:bg-error/10 rounded-md transition-colors">
              <LogOut size={20} />
              Sign Out
            </button>
          </form>
          <Link href="/" className="flex items-center gap-3 px-3 py-2 mt-2 text-on-surface-variant hover:text-white hover:bg-surface-bright rounded-md transition-colors">
            <ArrowLeft size={20} />
            Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-surface/50 backdrop-blur-md border-b border-outline-variant flex items-center px-8 sticky top-0 z-10">
          <h2 className="text-lg font-medium text-white">Admin Dashboard</h2>
        </header>
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
