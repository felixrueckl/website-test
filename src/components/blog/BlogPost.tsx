interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export function BlogPost({ title, excerpt, date, readTime }: BlogPostProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
}