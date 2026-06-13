import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <p className="section-title">Experience</p>
      <h2 className="section-heading">Where I&apos;ve Worked</h2>

      <div className="relative space-y-8">
        <div className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-accent/50 to-transparent md:block" />

        {experience.map((job, index) => (
          <div key={index} className="relative flex gap-6 md:gap-8">
            <div className="relative z-10 hidden shrink-0 md:block">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-surface-raised">
                <Briefcase size={16} className="text-accent-light" />
              </div>
            </div>

            <div className="glass-card flex-1 p-6 md:p-8">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                  <p className="text-accent-light">
                    {job.company}
                    {job.subtitle && (
                      <span className="text-gray-500"> · {job.subtitle}</span>
                    )}
                  </p>
                </div>
                <span className="rounded-full border border-surface-border bg-surface px-3 py-1 text-xs font-mono text-gray-400">
                  {job.period}
                </span>
              </div>

              <p className="mb-4 text-sm text-gray-500">{job.location}</p>

              <ul className="space-y-2">
                {job.highlights.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
