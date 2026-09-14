import {activeNavTick, navTick} from "@/components/nav/nav-icons";

export default function NavItem({label, isActive = false}: { label: string, isActive?: boolean }) {
    const displayedLabel = label.split('_').join(' ').toUpperCase();

    return (
        <a href={`#${label}`} className="group">
            <div className="flex flex-row gap-4 items-center justify-start h-7">
                <span className="block group-hover:hidden">{navTick}</span>
                <span className="hidden group-hover:block">{activeNavTick}</span>
                <p className="font-semibold text-sm text-inactive group-hover:text-foreground">{displayedLabel}</p>
            </div>
        </a>
    )
}