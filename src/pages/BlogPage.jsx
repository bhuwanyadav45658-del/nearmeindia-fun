import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react';
import { useState } from 'react';
import { blogPosts } from '../data/blogData';

function BlogPostCard({ post, onRead }) {
  return (
    <article className={`blog-card ${post.featured ? 'blog-card-featured' : ''}`}>
      <div className="blog-card-meta">
        <span className="blog-tag"><Tag size={14} />{post.category}</span>
        <span className="blog-date"><Calendar size={14} />{post.date}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="blog-card-footer">
        <span className="blog-author"><User size={14} />{post.author}</span>
        <span className="blog-read-time"><Clock size={14} />{post.readTime}</span>
      </div>
      <button type="button" className="blog-read-btn" onClick={() => onRead(post)}>
        Read more <ArrowRight size={16} />
      </button>
    </article>
  );
}

function BlogPostFull({ post, onBack }) {
  return (
    <div className="blog-full">
      <button type="button" className="blog-back-btn" onClick={onBack}>← Back to all posts</button>
      <article className="blog-full-article">
        <div className="blog-full-meta">
          <span className="blog-tag"><Tag size={14} />{post.category}</span>
          <span className="blog-date"><Calendar size={14} />{post.date}</span>
          <span className="blog-read-time"><Clock size={14} />{post.readTime}</span>
        </div>
        <h1>{post.title}</h1>
        <div className="blog-author-line"><User size={16} /><span>{post.author}</span></div>
        <div className="blog-full-content">
          {post.content.split('\n').filter(Boolean).map((para, i) =>
            para.trim().startsWith('•') ? <li key={i}>{para.trim().slice(1).trim()}</li> : <p key={i}>{para.trim()}</p>
          )}
        </div>
      </article>
    </div>
  );
}

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return (
      <div className="page-wrapper">
        <section className="section-padded">
          <div className="wide-inner">
            <BlogPostFull post={selectedPost} onBack={() => setSelectedPost(null)} />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <section className="page-hero blog-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Blog</p>
          <h1>Updates & stories.</h1>
          <p className="page-hero-subtitle">Coverage updates, feature announcements, and community stories.</p>
        </div>
      </section>
      <section className="section-padded">
        <div className="wide-inner">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} onRead={setSelectedPost} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-padded section-cta">
        <div className="wide-inner cta-box">
          <h2>Want to write for NearMe India?</h2>
          <p>Share your public service experience with millions.</p>
          <div className="cta-actions">
            <a href="#/contact" className="btn-primary">Pitch a Story</a>
          </div>
        </div>
      </section>
    </div>
  );
}
