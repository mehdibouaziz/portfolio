import Branding from "@/components/branding/branding";
import Nav from "@/components/nav/nav";
import Socials from "@/components/socials/socials";
import Portfolio from "@/components/portfolio/portfolio";
import Footer from "@/components/footer/footer";

export default function HomePage() {
    return (
        <div className="h-full max-w-screen">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
                <header className="w-full flex flex-col gap-5 relative px-12 py-24 lg:sticky lg:top-0 lg:w-140 lg:h-screen lg:px-8 lg:pr-0 lg:justify-between">
                    <div className="w-full flex flex-col gap-5">
                        <Branding/>
                        <Nav/>
                    </div>
                    <Socials/>
                </header>
                <main id="content" className="max-w-screen flex flex-col px-4 py-6 lg:w-160 lg:px-0 lg:py-24">
                    <Portfolio/>
                    <Footer/>
                </main>
            </div>
        </div>
    );
}
