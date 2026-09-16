import Image from "next/image";
import figma from "./designs/figma.png"
import lightMode from "./designs/lightmode.png"
import darkMode from "./designs/darkmode.png"
import components from "./designs/components.png"
import SubPageTitle from "@/app/(subpages)/subPageTitle";

export default function FigmaDesigns() {
    return (
            <div className="max-w-300 h-full px-5 pb-24 flex flex-col gap-5">
                <SubPageTitle label={'Figma Designs'} />
                <Image src={figma} alt={'figma designs overview'} />
                <div className="flex flex-row gap-5 justify-between">
                    <Image className="w-[48%] border border-hover" src={lightMode} alt={'figma designs overview'} loading="lazy" />
                    <div className="w-[48%] flex flex-col gap-5">
                        <Image className="border border-hover" src={darkMode} alt={'figma designs overview'} loading="lazy" />
                        <Image className="border border-hover" src={components} alt={'figma designs overview'} loading="lazy" />
                    </div>
                </div>
            </div>
    )
}