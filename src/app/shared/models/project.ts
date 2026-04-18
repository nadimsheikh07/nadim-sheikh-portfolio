export interface Project {
  title: string;
  period: string;
  description: string;
  tech: string[];
  company?: string;
  url?: string;
  outcomes?: string[];
  projects?: Project[];
}
