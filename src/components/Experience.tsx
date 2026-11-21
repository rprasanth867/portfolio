import { experience, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section reveal" aria-labelledby="experience-title">
      <div className="section__head">
        <span className="section__index mono">02</span>
        <h2 id="experience-title" className="section__title">Experience</h2>
        <div className="section__rule" aria-hidden="true" />
      </div>

      <div className="timeline" role="list" aria-label="Work experience">
        {experience.map((job) => (
          <article key={job.id} className="timeline__item" role="listitem">
            <div className="timeline__dot" aria-hidden="true" />
            <div className="timeline__card">
              <div className="timeline__meta">
                <span className="mono">{job.period}</span>
                {job.current && <span className="badge badge--live">CURRENT</span>}
              </div>
              <h3>
                {job.role} <em>· {job.company}</em>
              </h3>
              <p className="timeline__loc mono">{job.location}</p>
              <p>{job.description}</p>
              <ul>
                {job.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex}>{highlight}</li>
                ))}
              </ul>
              <div className="chips" role="list" aria-label="Technologies used">
                {job.technologies.map((tech, techIndex) => (
                  <span key={techIndex} role="listitem">{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
        {education.map((edu) => (
          <article key={edu.id} className="timeline__item" role="listitem">
            <div className="timeline__dot timeline__dot--edu" aria-hidden="true" />
            <div className="timeline__card timeline__card--edu">
              <div className="timeline__meta">
                <span className="mono">{edu.period}</span>
              </div>
              <h3>{edu.degree} <em>· {edu.institution}</em></h3>
              <p className="timeline__loc mono">{edu.location}</p>
              <ul>
                <li>Full-time immersive program</li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
