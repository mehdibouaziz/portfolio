import Branding from "@/components/branding/branding";
import Nav from "@/components/nav/nav";
import Socials from "@/components/socials/socials";
import Portfolio from "@/components/portfolio/portfolio";
import Footer from "@/components/footer/footer";

export default function HomePage() {
    return (
        <div className="h-full max-w-screen">
            <div className="flex flex-row justify-between gap-4">
                <header className="h-screen w-140 flex flex-col gap-5 justify-between sticky top-0 py-24">
                    <div className="w-150 flex flex-col gap-5">
                        <Branding/>
                        <Nav/>
                    </div>
                    <Socials/>
                </header>
                <main id="content" className="w-160 flex flex-col py-24">
                    <Portfolio/>
                    <Footer/>
                </main>
            </div>
        </div>
    );
}
