import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section section--contact reveal" aria-labelledby="contact-title">
      <div className="section__head">
        <span className="section__index mono">06</span>
        <h2 id="contact-title" className="section__title">Contact</h2>
        <div className="section__rule" aria-hidden="true" />
      </div>

      <div className="contact">
        <h3 className="contact__big">Let&apos;s build something fast.</h3>
        <p className="contact__note">
          Open to {personalInfo.targetRoles.join(" and ")} roles, with {personalInfo.employmentType} opportunities in {personalInfo.preferredLocations.join(", ")} or remote.
        </p>

        <div className="contact__grid" role="list" aria-label="Contact methods">
          <article className="contact__card" role="listitem">
            <span>EMAIL</span>
            <a href={personalInfo.emailUrl}><b>{personalInfo.email}</b></a>
          </article>
          <article className="contact__card" role="listitem">
            <span>PHONE</span>
            <a href={personalInfo.phoneUrl}><b>{personalInfo.phone}</b></a>
          </article>
          <article className="contact__card" role="listitem">
            <span>LINKEDIN</span>
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer"><b>{personalInfo.linkedin} ↗</b></a>
          </article>
          <article className="contact__card" role="listitem">
            <span>GITHUB</span>
            <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer"><b>{personalInfo.github} ↗</b></a>
          </article>
        </div>
      </div>
    </section>
  );
}
