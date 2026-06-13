import { Mail, Phone, MapPin, Github, Linkedin, User } from 'lucide-react'
import { profile, references } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <p className="section-title">Contact</p>
      <h2 className="section-heading">Let&apos;s Connect</h2>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass-card p-8">
          <h3 className="mb-6 text-lg font-semibold text-white">Get in Touch</h3>

          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-xl border border-surface-border p-4 transition-all hover:border-accent/30 hover:bg-accent/5"
            >
              <div className="rounded-lg bg-accent/10 p-2">
                <Mail size={20} className="text-accent-light" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm text-gray-200">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-4 rounded-xl border border-surface-border p-4 transition-all hover:border-accent/30 hover:bg-accent/5"
            >
              <div className="rounded-lg bg-accent/10 p-2">
                <Phone size={20} className="text-accent-light" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm text-gray-200">{profile.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-surface-border p-4">
              <div className="rounded-lg bg-accent/10 p-2">
                <MapPin size={20} className="text-accent-light" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-sm text-gray-200">{profile.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-surface-border px-5 py-2.5 text-sm text-gray-300 transition-all hover:border-accent/40 hover:text-white"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-surface-border px-5 py-2.5 text-sm text-gray-300 transition-all hover:border-accent/40 hover:text-white"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="glass-card p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2">
              <User size={20} className="text-accent-light" />
            </div>
            <h3 className="text-lg font-semibold text-white">References</h3>
          </div>

          <div className="space-y-4">
            {references.map((ref, index) => (
              <div
                key={index}
                className="rounded-xl border border-surface-border p-4 transition-colors hover:border-accent/20"
              >
                <p className="font-medium text-white">{ref.name}</p>
                <p className="text-sm text-accent-light">{ref.role}</p>
                <p className="text-xs text-gray-500">{ref.location}</p>
                <a
                  href={`tel:${ref.phone.replace(/\s/g, '')}`}
                  className="mt-1 inline-block text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {ref.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
