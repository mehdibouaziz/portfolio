export type projectI = {
    key: string;
    title: string;
    url?: string;
    description: string;
    tags: string[];
}

export const PROJECTS: Record<string, projectI> = {
    sdc: {
        key: "sdc",
        title: "SDC",
        url: "https://www.hemmersbach.com/sdc",
        description: "The project management tool I worked on for 3 years at Hemmersbach. " +
            "It allows users to monitor all facets of a project: tasks, decisions, staffing needs, billing cycles, etc — all according to Hemmersbach work processes. " +
            "The main module I was maintaining and expanding was AIDLOG, a collaborative OneNote-like tasks manager, where users can create, assign, track and validate all to-dos and milestones in a project. " +
            "Our main focus was to improve the performance when fetching and rendering complex data, to create more room to add features while maintaining a smooth UX.",
        tags: ['Typescript', 'React', 'PHP', 'Laravel'],
    },
    hr_app: {
        key: "hr_app",
        title: "HR App for recommendations bonuses",
        description: "4 months side project for Hemmersbach's HR. Web app to manage all recommendations received, track their status and automate the process of granting bonuses for new hires. " +
            "The goal was to make the process faster and limit manual steps to the minimum to guarantee a fair result. " +
            "I was in charge of the data tables components, for which I wrote all the components and custom middleware needed to quickly display, sort, filter, and export the thousand of archived records.",
        tags: ['Next.js', 'tanstack', 'shadcn/ui', 'Laravel'],
    },
    recipeApp: {
        key: "recipeApp",
        title: "Recipe App",
        url: "https://am-recipes.vercel.app/",
        description: "Web app I made to save my favorite cooking recipes, so I can always have access to them on my phone (PWA) with a clean UI to not get distracted when things get chaotic in the kitchen." +
            "I'm currently working on a V2 version, in Next.js to improve the backend and make the recipe imports easier.",
        tags: ['React', 'Tailwind', 'DaisyUI', 'Firebase'],
    },
    wordle: {
        key: "wordle",
        title: "Wordle Clone",
        url: "https://mehdibouaziz.github.io/wordle-clone/",
        description: "Clone of the popular NY Times game Wordle. Guess a 5-letters word in 6 tries." +
            "The word of the day is picked in sequence from a pool, and a random word mode is available." +
            "Playable both in English and French.",
        tags: ['React', 'Redux'],
    },
}