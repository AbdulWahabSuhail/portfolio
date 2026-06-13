import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <p className="section-title">Skills</p>
      <h2 className="section-heading">Technical Toolkit</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <div key={index} className="glass-card p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-light">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <span key={i} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
