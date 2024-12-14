import { BlogPost } from '@/components/blog/BlogPost';

const posts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js',
    date: '2024-01-15',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'The Power of TailwindCSS',
    excerpt: 'Discover how TailwindCSS can streamline your styling workflow',
    date: '2024-01-10',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'TypeScript Best Practices',
    excerpt: 'Tips and tricks for writing better TypeScript code',
    date: '2024-01-05',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}