import { login } from './actions'

export default function LoginPage({ searchParams }: { searchParams: { error: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="glass-card w-full max-w-md p-8 rounded-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
          </div>
          <h1 className="text-2xl font-bold text-white">NAIZO Admin</h1>
          <p className="text-on-surface-variant text-sm mt-2">Sign in to manage your website content</p>
        </div>

        <form action={login} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-on-surface-variant mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white"
              placeholder="admin@naizo.in"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-on-surface-variant mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white"
              placeholder="••••••••"
            />
          </div>
          
          {searchParams?.error && (
            <p className="text-error text-sm text-center bg-error/10 p-2 rounded border border-error/20">
              {searchParams.error === 'true' ? 'Invalid email or password.' : searchParams.error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors mt-6"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
