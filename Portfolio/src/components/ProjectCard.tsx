import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Types
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'data-science' | 'data-analysis' | 'economics';
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Use placeholder as fallback if image path is invalid
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/images/Placeholder.jpg';
  };

  return (
    <Card className="bg-slate-700/50 border-slate-600 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300">
      <div className="h-48 bg-slate-600 relative overflow-hidden">
        <img 
          src={project.image}
          alt={project.title}
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2">{project.title}</h3>
        <p className="text-slate-300 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-slate-600 hover:bg-slate-500 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Button 
          variant="default" 
          className="w-full bg-blue-500 hover:bg-blue-600" 
          asChild
        >
          <a href={project.link}>Ver Proyecto</a>
        </Button>
      </CardContent>
    </Card>
  );
}