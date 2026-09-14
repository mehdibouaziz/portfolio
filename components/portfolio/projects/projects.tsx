import SectionTitle from "@/components/portfolio/section-title";
import {projectI, PROJECTS} from "@/components/portfolio/projects/constants";
import ProjectCard from "@/components/portfolio/projects/project-card";

export default function Projects() {
    return (
        <section id="Projects" className="flex flex-col gap-4 scroll-mt-24 mb-24" aria-label="ABOUT ME">
            <SectionTitle label={'Projects'}/>
            {
                PROJECTS.map((project: projectI) => (
                    <ProjectCard key={project.key} project={project}/>
                ))
            }
        </section>
    )
}
