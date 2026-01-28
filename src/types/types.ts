
export interface Skill {
    name: string;
    logo: string;
    level: number;
}

export interface SkillTitles {
    subtitle: string;
    skills: Skill[];
}

export interface Project {
    name: string;
    image: string;
    description: string;
    tags: string[];
}

export interface ProjectsCategories {
    category: string;
    items: Project[];
}
