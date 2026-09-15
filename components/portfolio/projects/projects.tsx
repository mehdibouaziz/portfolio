import SectionTitle from "@/components/portfolio/section-title";
import {PROJECTS} from "@/components/portfolio/projects/constants";
import ProjectCard from "@/components/portfolio/projects/project-card";
import sdc from './thumbnails/sdc.png'
import hr_app from './thumbnails/hrapp.png'
import recipe_app from './thumbnails/recipes.png'
import wordle from './thumbnails/wordle.png'

export default function Projects() {
    return (
        <section id="Projects" className="flex flex-col gap-6 scroll-mt-24 mb-24" aria-label="ABOUT ME">
            <SectionTitle label={'Projects'}/>
            <ProjectCard key={'sdc'} project={PROJECTS.sdc} thumbnail={sdc}/>
            <ProjectCard key={'hr_app'} project={PROJECTS.hr_app} thumbnail={hr_app}/>
            <ProjectCard key={'recipeApp'} project={PROJECTS.recipeApp} thumbnail={recipe_app}/>
            <ProjectCard key={'wordle'} project={PROJECTS.wordle} thumbnail={wordle}/>
        </section>
    )
}
