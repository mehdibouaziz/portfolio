export type experienceI = {
    key: string;
    jobTitle: string;
    employer: string;
    location?: string;
    startYear: number;
    endYear?: number;
    description: string;
    bulletPoints?: string[];
    tags: string[];
}

export const EXPERIENCES: experienceI[] = [
    {
        key: "hemmersbach-2023",
        jobTitle: "Fullstack Software Engineer",
        employer: "Hemmersbach",
        location: "Wroclaw",
        startYear: 2023,
        endYear: 2026,
        description: "Developing and maintaining Hemmersbach’s in-house business management software designed to support all aspects of project delivery in compliance with industry standards. My team was in charge of developing the tools required to onboard additional departments and introducing automation features to provide company-wide efficiency gains.",
        tags: ['Typescript', 'React', 'PHP', 'Laravel', 'Next.js'],
    },
    {
        key: "alstom-2018",
        jobTitle: "Project Manager",
        employer: "Alstom",
        location: "Katowice",
        startYear: 2018,
        endYear: 2021,
        description: "Managed the project planning of 5-20 people teams and the workload of the engineering department (100+ people). Developed, improved, and maintained Excel and VBA tools to support the team's management.",
        tags: [],
    }
]