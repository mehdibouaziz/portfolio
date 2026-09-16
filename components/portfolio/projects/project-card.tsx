import {projectI} from "@/components/portfolio/projects/constants";
import TechChip from "@/components/portfolio/components/tech-chip";
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {Fragment} from "react";

// These components are out of the main one to avoid eslint static-components error
function Thumbnail({src, alt} : {src: string | StaticImport, alt: string}) {
    return (
        <div className="w-full lg:w-36 text-sm flex flex-col items-start">
            <div className="w-35 h-19.5">
                <Image src={src} alt={`${alt} thumbnail`} height={78} width={140}
                       className="rounded-sm border-2 border-hover group-hover:border-hover-light"/>
            </div>
        </div>
    )
}

function SmCard({project, thumbnail}: { project: projectI, thumbnail: string | StaticImport }){
    return (
        <div className="flex flex-col-reverse gap-4 px-4 py-5 rounded-lg hover:bg-hover lg:hidden lg:gap-3 group">
            <Thumbnail src={thumbnail} alt={`${project.title} thumbnail`} />
            <div className="w-full lg:w-6/8 flex flex-col gap-2">
                <div className="flex flex-row gap-2.5 items-center">
                    <a className="font-semibold text-base hover:text-primary" href={project.url} target="_blank"
                       rel="noopener noreferrer">
                        {project.url ?
                            `${project.title} ↗`
                            : project.title
                        }
                    </a>
                </div>
                <p className="text-sm">
                    {`${project.description}`}
                </p>
                <div className="flex flex-row gap-2.5 mt-1">
                    {project.tags.map(tag => (
                        <TechChip label={tag} key={`${project.key}-${tag}`}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

function LgCard({project, thumbnail}: { project: projectI, thumbnail: string | StaticImport }) {
    return (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="hidden lg:block">
            <div
                className="flex flex-col-reverse gap-4 px-4 py-5 rounded-lg hover:bg-hover lg:flex-row lg:gap-3 group">
                <Thumbnail src={thumbnail} alt={`${project.title} thumbnail`} />
                <div className="w-full lg:w-6/8 flex flex-col gap-2">
                    <div className="flex flex-row gap-2.5 items-center">
                        <p className="font-semibold text-base hidden lg:block group-hover:text-primary">
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
                            <TechChip label={tag} key={`${project.key}-${tag}`}/>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default function ProjectCard({project, thumbnail}: { project: projectI, thumbnail: string | StaticImport }) {
    return (
        <Fragment>
            <SmCard project={project} thumbnail={thumbnail} />
            <LgCard project={project} thumbnail={thumbnail} />
        </Fragment>
    )
}