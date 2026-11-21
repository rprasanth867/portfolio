import { blogPosts } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="section reveal" aria-labelledby="blog-title">
      <div className="section__head">
        <span className="section__index mono">05</span>
        <h2 id="blog-title" className="section__title">Blog</h2>
        <div className="section__rule" aria-hidden="true" />
      </div>

      <div className="blog" role="list" aria-label="Blog posts">
        {blogPosts.map((post) => (
          <article key={post.id} className={`post ${post.draft ? "post--draft" : ""}`} role="listitem">
            <div className="post__meta">
              <time dateTime={post.date}>{post.date}</time>
              <span className="post__go">
                Read →
              </span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="chips" role="list" aria-label="Tags">
              {post.tags.map((tag, index) => (
                <span key={index} role="listitem">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="blog__more">
        <a href="#" className="btn btn--ghost">All posts</a>
      </div>
    </section>
  );
}
