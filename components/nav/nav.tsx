import NavItem from "@/components/nav/NavItem";

export default function Nav() {
    return (
        <div className="hidden lg:flex flex-col items-start justify-center">
            <NavItem label={'About_Me'} />
            <NavItem label={'Experience'} />
            <NavItem label={'Projects'} />
        </div>
    );
}
