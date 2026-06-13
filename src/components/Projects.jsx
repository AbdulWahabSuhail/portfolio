import { ExternalLink, Star } from 'lucide-react'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <p className="section-title">Projects</p>
      <h2 className="section-heading">Featured Work</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`glass-card group relative overflow-hidden p-6 md:p-8 ${
              project.featured ? 'md:col-span-2 md:grid md:grid-cols-2 md:gap-8' : ''
            }`}
          >
            {project.featured && (
              <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                <Star size={12} fill="currentColor" />
                Featured — FYP
              </div>
            )}

            <div className={project.featured ? 'flex flex-col justify-center' : ''}>
              <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-accent-light transition-colors">
                {project.title}
              </h3>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-accent/10 px-2.5 py-0.5 text-xs font-mono text-accent-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mb-3 leading-relaxed text-gray-400">{project.description}</p>

              {project.details && (
                <p className="text-sm text-gray-500">{project.details}</p>
              )}

              {project.featured && (
                <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <p className="text-sm font-medium text-emerald-400">
                    25× response rate improvement
                  </p>
                  <p className="text-xs text-gray-500">2% → 25% survey engagement</p>
                </div>
              )}
            </div>

            {project.featured && (
              <div className="mt-6 flex items-center justify-center rounded-xl border border-surface-border bg-surface p-8 md:mt-0">
                <div className="text-center">
                  <div className="mb-2 text-5xl font-bold text-accent-light">25×</div>
                  <p className="text-sm text-gray-400">Response Rate Boost</p>
                  <div className="mt-4 flex justify-center gap-2">
                    {['Intent', 'Sentiment', 'Dialogue'].map((phase) => (
                      <span
                        key={phase}
                        className="rounded-full border border-surface-border px-3 py-1 text-xs text-gray-500"
                      >
                        {phase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/AbdulWahabSuhail"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-accent-light"
        >
          View more on GitHub
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  )
}
