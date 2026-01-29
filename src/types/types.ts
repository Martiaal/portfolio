
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

export interface ExpItem {
    year: string;
    title: string;
    subtitle: string;
    type: "university" | "work";
}

export interface SoftSkill {
    "label": string;
    "description": string;
    "code": string;
}
