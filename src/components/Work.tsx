import { projects } from "@/lib/data";

export default function Work() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="work" className="section reveal" aria-labelledby="work-title">
      <div className="section__head">
        <span className="section__index mono">03</span>
        <h2 id="work-title" className="section__title">Selected work</h2>
        <div className="section__rule" aria-hidden="true" />
      </div>

      <div className="projects">
        {featuredProject && (
          <article className="proj proj--feature" aria-labelledby={`${featuredProject.id}-title`}>
            <div>
              <span className="badge" style={{
                borderColor: "rgba(167, 139, 250, 0.45)",
                color: "var(--violet)",
                background: "rgba(167, 139, 250, 0.08)"
              }}>
                FLAGSHIP
              </span>
              <h3 id={`${featuredProject.id}-title`}>{featuredProject.title}</h3>
              <p className="proj__sub">{featuredProject.subtitle}</p>
              <p>{featuredProject.description}</p>
              <div className="chips" role="list" aria-label="Key features">
                {featuredProject.points.map((point, index) => (
                  <span key={index} role="listitem">{point}</span>
                ))}
              </div>
              <div className="chips chips--lg" role="list" aria-label="Technologies used">
                {featuredProject.technologies.map((tech, index) => (
                  <span key={index} role="listitem">{tech}</span>
                ))}
              </div>
            </div>
            <div className="proj__art" aria-label="Project visualization">
              <div className="ticker" role="region" aria-label="Live market ticker">
                <div className="ticker__row">
                  <span className="mono">BTC/USDT</span>
                  <span><span className="up">▲ 2.4%</span> <span className="mono">$67,420.12</span></span>
                </div>
                <div className="ticker__row">
                  <span className="mono">ETH/USDT</span>
                  <span><span className="up">▲ 1.8%</span> <span className="mono">$3,421.56</span></span>
                </div>
                <div className="ticker__row">
                  <span className="mono">SOL/USDT</span>
                  <span><span className="down">▼ 0.7%</span> <span className="mono">$142.89</span></span>
                </div>
                <div className="ticker__row">
                  <span className="mono">AVAX/USDT</span>
                  <span><span className="up">▲ 3.1%</span> <span className="mono">$35.67</span></span>
                </div>
              </div>
              <svg className="spark" viewBox="0 0 420 80" aria-label="Price chart" role="img">
                <path
                  className="spark__line"
                  d="M0,40 C60,20 120,55 180,35 C240,15 300,60 360,30 C390,15 420,40 420,40"
                />
              </svg>
            </div>
          </article>
        )}

        {otherProjects.map((project) => (
          <article key={project.id} className="proj" aria-labelledby={`${project.id}-title`}>
            <h3 id={`${project.id}-title`}>{project.title}</h3>
            <p className="proj__sub">{project.subtitle}</p>
            <p>{project.description}</p>
            {project.technologies.length > 0 && (
              <div className="chips" role="list" aria-label="Technologies used">
                {project.technologies.map((tech, index) => (
                  <span key={index} role="listitem">{tech}</span>
                ))}
              </div>
            )}
            {project.points.length > 0 && (
              <ul className="proj__points" role="list">
                {project.points.map((point, index) => (
                  <li key={index} role="listitem">{point}</li>
                ))}
              </ul>
            )}
            {project.links.length > 0 && (
              <div className="proj__links" role="list" aria-label="Project links">
                {project.links.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" role="listitem">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
