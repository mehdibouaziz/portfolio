export type projectI = {
    key: string;
    projectTitle: string;
    description: string;
    imgSrc: string;
    tags: string[];
}

export const PROJECTS: projectI[] = [
    {
        key: "sdc-2023",
        projectTitle: "SDC",
        description: "The project management tool I contributed to for 3 years at Hemmersbach. Technologies used: React, TypeScript, laravel, php.",
        imgSrc: '',
        tags: ['Typescript', 'React', 'PHP', 'Laravel'],
    },
]