import { stack } from "@/lib/data";

export default function Stack() {
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
              <span className="mono">{group.title.split(" ")[0]}</span>
              {group.title.split(" ").slice(1).join(" ")}
            </h3>
            <div className="chips chips--lg" role="list" aria-label={`${group.title} technologies`}>
              {group.items.map((item) => <span key={item} role="listitem">{item}</span>)}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
