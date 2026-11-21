import { stack, githubStats, personalInfo } from "@/lib/data";

export default function Stack() {
  const totalPercentage = githubStats.languageBreakdown.reduce((sum, lang) => {
    return sum + parseFloat(lang.percentage);
  }, 0);

  return (
    <section id="stack" className="section reveal" aria-labelledby="stack-title">
      <div className="section__head">
        <span className="section__index mono">04</span>
        <h2 id="stack-title" className="section__title">Stack</h2>
        <div className="section__rule" aria-hidden="true" />
      </div>

      <div className="stack" role="list" aria-label="Technology stack">
        {stack.map((group) => (
          <div key={group.id} className="stack__group" role="listitem">
            <h3>
              <span className="mono">{group.title.split(' ')[0]}</span>
              {group.title.split(' ').slice(1).join(' ')}
            </h3>
            <div className="chips chips--lg" role="list" aria-label={`${group.title} technologies`}>
              {group.items.map((item, itemIndex) => (
                <span key={itemIndex} role="listitem">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="github" role="region" aria-label="GitHub activity">
        <p className="github__title">GitHub activity</p>

        <div className="gh__stats" role="list" aria-label="GitHub statistics">
          <div className="gh__stat" role="listitem">
            <b>{githubStats.publicRepos}</b>
            <span>Public repos</span>
          </div>
          <div className="gh__stat" role="listitem">
            <b>{githubStats.starsEarned}</b>
            <span>Stars earned</span>
          </div>
          <div className="gh__stat" role="listitem">
            <b>{githubStats.followers}</b>
            <span>Followers</span>
          </div>
        </div>

        <div className="gh__langs" role="region" aria-label="Language breakdown">
          <div className="gh__bar" role="img" aria-label={`Language breakdown: ${githubStats.languageBreakdown.map(l => `${l.name} ${l.percentage}`).join(', ')}`}>
            {githubStats.languageBreakdown.map((lang, index) => (
              <div
                key={index}
                className="gh__seg"
                style={{
                  width: `${parseFloat(lang.percentage) / totalPercentage * 100}%`,
                  background: index === 0 ? 'var(--cyan)' : index === 1 ? 'var(--violet)' : index === 2 ? 'var(--pink)' : 'var(--text-faint)'
                }}
                role="presentation"
              />
            ))}
          </div>
          <div className="gh__legend" role="list" aria-label="Language legend">
            {githubStats.languageBreakdown.map((lang, index) => (
              <span key={index} className="gh__legend-item" role="listitem">
                <i
                  style={{
                    background: index === 0 ? 'var(--cyan)' : index === 1 ? 'var(--violet)' : index === 2 ? 'var(--pink)' : 'var(--text-faint)'
                  }}
                  aria-hidden="true"
                />
                <b>{lang.name}</b>
                <span>{lang.percentage}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="gh__repos" role="list" aria-label="Recent repositories">
          {githubStats.recentRepos.map((repo, index) => (
            <article key={index} className="gh__repo" role="listitem">
              <b>{repo.name}</b>
              <span>{repo.description}</span>
              <em>
                <i
                  style={{ background: repo.language === 'JavaScript' ? 'var(--violet)' : repo.language === 'TypeScript' ? 'var(--cyan)' : repo.language === 'HTML' ? 'var(--pink)' : 'var(--text-faint)' }}
                  aria-hidden="true"
                />
                {repo.language}
                {repo.stars > 0 && <span> ★ {repo.stars}</span>}
              </em>
            </article>
          ))}
        </div>

        <p className="gh__note">
          Live from the GitHub API · updated {githubStats.lastUpdated}
          <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer">View profile ↗</a>
        </p>
      </div>
    </section>
  );
}
