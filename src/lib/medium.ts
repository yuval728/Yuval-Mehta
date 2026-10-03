import { CONFIG } from '@/data/config';

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
}

export async function fetchMediumPosts(posts_count?: number): Promise<MediumPost[]> {
  try {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${CONFIG.medium}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Medium posts');
    }

    const data = await response.json();

    if (!data.items) {
      return getFallbackPosts();
    }

    const items = posts_count ? data.items.slice(0, posts_count) : data.items;

    return items.map((item: any) => ({
      title: item.title,
      link: item.link,
      pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      }),
      categories: item.categories || [],
    }));
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return getFallbackPosts();
  }
}

// No invented posts: if the feed fails, render an empty list and let the UI link to Medium.
function getFallbackPosts(): MediumPost[] {
  return [];
}
