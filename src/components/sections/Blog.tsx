import { fetchMediumPosts } from '@/lib/medium';
import { BlogList } from '@/components/sections/BlogList';
import { CONFIG } from '@/data/config';

export async function Blog() {
  const posts = await fetchMediumPosts();
  if (posts.length === 0) {
    return (
      <section id="blog" className="relative py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-8">// writing</p>
          <a
            href={`https://medium.com/@${CONFIG.medium}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-medium text-accent-blue hover:underline"
          >
            Read my articles on Medium →
          </a>
        </div>
      </section>
    );
  }
  return <BlogList posts={posts} />;
}
