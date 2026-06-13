import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-surface-border bg-surface-raised/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-8">
        <p className="text-sm text-gray-500">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="text-sm text-gray-600">
          Built with React & Tailwind · Deployed on Vercel
        </p>
      </div>
    </footer>
  )
}
