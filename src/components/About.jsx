import { GraduationCap } from 'lucide-react'
import { profile, education } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section-container">
      <p className="section-title">About</p>
      <h2 className="section-heading">Professional Summary</h2>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="glass-card p-8 lg:col-span-2">
          <p className="text-lg leading-relaxed text-gray-300">{profile.summary}</p>
        </div>

        <div className="glass-card p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-2">
              <GraduationCap size={22} className="text-accent-light" />
            </div>
            <h3 className="text-lg font-semibold text-white">Education</h3>
          </div>

          <div className="space-y-6">
            {education.map((item, index) => (
              <div
                key={index}
                className={
                  index !== education.length - 1
                    ? 'border-b border-surface-border pb-6'
                    : ''
                }
              >
                <p className="font-medium text-white">{item.degree}</p>
                <p className="mt-1 text-sm text-gray-400">{item.school}</p>
                <p className="mt-1 text-xs font-mono text-accent-light">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
