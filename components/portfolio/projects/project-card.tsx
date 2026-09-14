import {projectI} from "@/components/portfolio/projects/constants";
import TechChip from "@/components/portfolio/components/tech-chip";

export default function ProjectCard({project}: { project: projectI }) {
    return (
        <div className="flex flex-row">
            <div className="w-2/8 text-sm">
                image
            </div>
            <div className="w-6/8 flex flex-col gap-2">
                <div className="flex flex-row gap-2.5 items-center">
                    <p className="font-semibold text-sm">
                        {`${project.projectTitle}`}
                    </p>
                </div>
                <p className="text-sm">
                    {`${project.description}`}
                </p>
                <div className="flex flex-row gap-2.5 mt-1">
                    {project.tags.map(tag => (
                        <TechChip label={tag} key={`${project.key}-${tag}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}