
export interface Project {
  id: string;
  kicker: string;
  title: string;
  description: string;
  mediaUrl: string;
  type: 'video' | 'image';
  stack: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}
