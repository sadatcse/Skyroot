import projectsData from './data/projects.json';

export interface Project {
  id: string;
  title: string;
  location: string;
  type: 'Residential' | 'Commercial' | 'Mixed Use' | 'Interior Design';
  status: 'Ongoing' | 'Upcoming' | 'Completed' | 'Consultancy';
  image: string;
  description: string;
  price?: string;
  unitsLeft?: number;
  landArea?: string;
  facing?: string;
  buildingHeight?: string;
  unitsPerFloor?: string;
  totalUnits?: string;
  apartmentSizes?: string;
  parkings?: string;
  consultant?: string;
  client?: string;
  features?: string[];
  services?: string[];
  pdfUrl?: string;
  additionalImages?: string[];
}

// THIS EXACT LINE IS WHAT REACT IS LOOKING FOR
export const projects = projectsData as Project[];

export const featuredProjects = projects.filter(p => p.id.startsWith('fp'));