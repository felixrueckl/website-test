interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export function ProjectCard({ title, description, tags, imageUrl }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}