export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  imageAlt?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}
