import { createClient } from '@/utils/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Users, Briefcase, IndianRupee } from 'lucide-react'

export default async function AdminDashboard() {
  const supabase = createClient()

  // Fetch quick stats
  const { count: blogCount } = await supabase.from('blogs').select('*', { count: 'exact', head: true })
  const { count: leadsCount } = await supabase.from('leads').select('*', { count: 'exact', head: true })
  const { count: caseStudiesCount } = await supabase.from('case_studies').select('*', { count: 'exact', head: true })
  const { count: pricingCount } = await supabase.from('pricing_plans').select('*', { count: 'exact', head: true })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Welcome back, Admin</h1>
        <p className="text-on-surface-variant mt-2">Here is what's happening with your website today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-on-surface-variant">Total Blogs</CardTitle>
            <FileText className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{blogCount || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-on-surface-variant">New Leads</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{leadsCount || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-on-surface-variant">Case Studies</CardTitle>
            <Briefcase className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{caseStudiesCount || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-on-surface-variant">Pricing Plans</CardTitle>
            <IndianRupee className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{pricingCount || 0}</div>
          </CardContent>
        </Card>
      </div>
      
      <div className="glass-card p-8 rounded-2xl border border-outline-variant mt-8">
        <h3 className="text-xl font-semibold text-white mb-4">Getting Started</h3>
        <p className="text-on-surface-variant mb-4">
          Use the sidebar on the left to manage your website content. You can add new blogs, update your pricing plans, manage client testimonials, and view incoming contact leads.
        </p>
        <ul className="list-disc list-inside space-y-2 text-on-surface-variant">
          <li>Changes made here will instantly reflect on the public website.</li>
          <li>For images, ensure you compress them before uploading to keep the website fast.</li>
          <li>Always review your content before publishing.</li>
        </ul>
      </div>
    </div>
  )
}
