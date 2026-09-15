function TechDot() {
    return (
        <span className="text-primary font-bold">·</span>
    )
}

export default function Branding() {
    return (
        <div className="flex flex-col gap-2.5 py-2.5">
            <h1 className="text-5xl font-bold">
                <span className="text-primary">M</span>ehdi Bouaziz
            </h1>
            <p className="text-xl font-medium">Fullstack Developer</p>
            {/*<p className="text-base w-65">I build clean and reliable web applications and APIs</p>*/}
            <div className="flex flex-row gap-4">
                <div>React</div>
                <TechDot/>
                <div>Next.js</div>
                <TechDot/>
                <div>Node.js</div>
                <TechDot/>
                <div>PHP</div>
            </div>
        </div>
    );
}
