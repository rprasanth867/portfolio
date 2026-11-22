import { education, experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section reveal" aria-labelledby="experience-title">
      <div className="section__head">
        <span className="section__index mono">02</span>
        <h2 id="experience-title" className="section__title">Experience</h2>
        <div className="section__rule" aria-hidden="true" />
      </div>

      <div className="timeline" role="list" aria-label="Work experience and education">
        {experience.map((company) => (
          <article key={company.id} className="timeline__item" role="listitem">
            <div className="timeline__dot" aria-hidden="true" />
            <div className="timeline__card experience__company-card">
              <header className="experience__company">
                <h3>{company.company}</h3>
                <p>{company.employment}</p>
                <p>{company.arrangement} · {company.location}</p>
              </header>

              {company.roles.map((role) => (
                <section key={role.id} className="experience__role" aria-labelledby={`${role.id}-title`}>
                  <div className="timeline__meta">
                    <span className="mono">{role.period}</span>
                    {role.current && <span className="badge badge--live">CURRENT</span>}
                  </div>
                  <h4 id={`${role.id}-title`}>{role.title}</h4>
                  <p className="timeline__loc mono">{role.location}</p>
                  <ul>
                    {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <div className="chips" role="list" aria-label={`Technologies used as ${role.title}`}>
                    {role.technologies.map((technology) => (
                      <span key={technology} role="listitem">{technology}</span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        ))}
        {education.map((item) => (
          <article key={item.id} className="timeline__item" role="listitem">
            <div className="timeline__dot timeline__dot--edu" aria-hidden="true" />
            <div className="timeline__card timeline__card--edu">
              <div className="timeline__meta"><span className="mono">{item.period}</span></div>
              <h3>{item.degree} <em>· {item.institution}</em></h3>
              <p className="timeline__loc mono">{item.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
