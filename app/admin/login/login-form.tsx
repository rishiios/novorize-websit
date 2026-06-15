'use client'

import { useFormState } from 'react-dom'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { login } from './actions'
import { SubmitButton } from './submit-button'

const initialState = {
  error: null as string | null,
  success: false
}

export function LoginForm({ initialError }: { initialError?: string }) {
  const [state, formAction] = useFormState(login, initialState)

  const displayError = state.error || initialError

  return (
    <form action={formAction} className="space-y-4">
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
      
      {displayError && (
        <p className="text-error text-sm text-center bg-error/10 p-2 rounded border border-error/20">
          {displayError}
        </p>
      )}

      <SubmitButton />
    </form>
  )
}
