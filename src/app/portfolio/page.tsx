import { ProjectCard } from '@/components/portfolio/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and TailwindCSS',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    imageUrl: '/api/placeholder/400/300',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    tags: ['React', 'Firebase', 'Material-UI'],
    imageUrl: '/api/placeholder/400/300',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather data',
    tags: ['Vue.js', 'OpenWeather API', 'Charts.js'],
    imageUrl: '/api/placeholder/400/300',
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}