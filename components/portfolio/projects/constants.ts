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
        description: "The project management tool I contributed to for 3 years at Hemmersbach. Technologies used: React, TypeScript, laravel, php.",
        tags: ['Typescript', 'React', 'PHP', 'Laravel'],
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
        tags: ['React', 'Tailwind', 'DaisyUI', 'Firebase'],
    },
}