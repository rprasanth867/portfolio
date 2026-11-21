import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section reveal" aria-labelledby="about-title">
      <div className="section__head">
        <span className="section__index mono">01</span>
        <h2 id="about-title" className="section__title">About</h2>
        <div className="section__rule" aria-hidden="true" />
      </div>

      <div className="about">
        <div className="about__text">
          <p className="lead">{personalInfo.about}</p>
          {personalInfo.aboutDetails.map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}

          <div className="about__tags" role="list" aria-label="Focus areas">
            {personalInfo.focusAreas.map((area, index) => (
              <span key={index} role="listitem">
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="about__stats" role="list" aria-label="Statistics">
          {personalInfo.stats.map((stat, index) => (
            <div key={index} className="stat" role="listitem">
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
