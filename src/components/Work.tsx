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
            <span className="badge">FEATURED WORK</span>
            <h3 id={`${featuredProject.id}-title`}>{featuredProject.title}</h3>
            <p className="proj__sub">{featuredProject.subtitle}</p>
            <p>{featuredProject.description}</p>
            <ul className="proj__points" role="list" aria-label="Key contributions">
              {featuredProject.points.map((point) => <li key={point} role="listitem">{point}</li>)}
            </ul>
            <div className="chips chips--lg" role="list" aria-label="Technologies used">
              {featuredProject.technologies.map((tech) => (
                <span key={tech} role="listitem">{tech}</span>
              ))}
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
          </article>
        ))}
      </div>
    </section>
  );
}
