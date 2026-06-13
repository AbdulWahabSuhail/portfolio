import { MapPin, Mail, Phone, Github, Linkedin, ArrowDown } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="section-container relative z-10 w-full pb-16">
        <div className="max-w-3xl animate-fade-in">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-raised/60 px-4 py-1.5 text-sm text-gray-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </p>

          <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Abdul Wahab
            <br />
            <span className="bg-gradient-to-r from-accent-light via-purple-400 to-accent bg-clip-text text-transparent">
              Suhail
            </span>
          </h1>

          <p className="mb-2 text-xl font-medium text-gray-300 md:text-2xl">
            {profile.title}
          </p>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-400">
            Building intelligent systems — from ML models on Azure to full-stack
            AI applications that solve real problems.
          </p>

          <div className="mb-10 flex flex-wrap gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-accent-light" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail size={16} className="text-accent-light" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone size={16} className="text-accent-light" />
              {profile.phone}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent-glow"
            >
              View Projects
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-surface-border px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-accent/40 hover:text-white"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-surface-border px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-accent/40 hover:text-white"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 transition-colors hover:text-accent-light"
          aria-label="Scroll to about"
        >
          <ArrowDown size={24} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
