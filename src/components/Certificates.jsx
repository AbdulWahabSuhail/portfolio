import { Award } from 'lucide-react'
import { certificates } from '../data/portfolio'

export default function Certificates() {
  return (
    <section id="certificates" className="section-container">
      <p className="section-title">Certificates</p>
      <h2 className="section-heading">Credentials & Training</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <div key={index} className="glass-card p-6 md:p-8">
            <div className="mb-4 flex items-start gap-4">
              <div className="rounded-lg bg-accent/10 p-3">
                <Award size={22} className="text-accent-light" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{cert.title}</h3>
                <p className="mt-1 text-xs font-mono text-accent-light">{cert.period}</p>
              </div>
            </div>
            <p className="leading-relaxed text-gray-400">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
