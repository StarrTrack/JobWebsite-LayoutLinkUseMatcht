export interface Salary {
  from: number | null;
  to: number | null;
  currency: string | null;
  gross: boolean | null;
}

export interface Area {
  id: string;
  name: string;
}

export interface Employer {
  id: string;
  name: string;
  url: string;
}

export interface Schedule {
  id: string;
  name: string;
}

export interface Experience {
  id: string;
  name: string;
}

export interface Vacancy {
  id: string;
  name: string;
  salary: Salary | null;
  area: Area;
  employer: Employer;
  schedule: Schedule;
  experience: Experience;
  alternate_url: string;
}

export interface VacanciesResponse {
  items: Vacancy[];
  found: number;
  pages: number;
  per_page: number;
  page: number;
}

export interface VacancyFilters {
  text: string;
  area: string;
  skillSet: string[];
  page: number;
}
