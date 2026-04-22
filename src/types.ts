export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  coverImage?: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  order: number;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  order: number;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Design' | 'Other';
  icon?: string;
}
