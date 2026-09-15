import {projectI} from "@/components/portfolio/projects/constants";
import TechChip from "@/components/portfolio/components/tech-chip";
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

export default function ProjectCard({project, thumbnail}: { project: projectI, thumbnail: string|StaticImport }) {
    function renderCard() {
        return (
            <div className="flex flex-row px-4 py-5 rounded-lg hover:bg-hover">
                <div className="w-2/8 text-sm flex flex-col items-start">
                    <div className="w-35 h-19.5">
                        <Image src={thumbnail} alt={`${project.title} thumbnail`} height={78} width={140} className="rounded-sm border-2 border-hover"  />
                    </div>
                </div>
                <div className="w-6/8 flex flex-col gap-2">
                    <div className="flex flex-row gap-2.5 items-center">
                        <p className="font-semibold text-sm">
                            {project.url ?
                                `${project.title} ↗`
                                : project.title
                            }
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

    if (project.url) {
        return (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
                {renderCard()}
            </a>
        )
    }

    return renderCard();
}