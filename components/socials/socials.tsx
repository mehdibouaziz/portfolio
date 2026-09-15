import {github, linkedin} from "@/components/socials/icons";
import ThemeToggle from "@/components/theme-provider/theme-toggle";

export default function Socials() {
    return (
        <div className="flex flex-row gap-5">
            <a
                href="https://www.linkedin.com/in/mehdi-bouaziz"
                target="_blank"
                rel="noopener noreferrer"
            >{linkedin}</a>
            <a
                href="https://github.com/mehdibouaziz"
                target="_blank"
                rel="noopener noreferrer"
            >{github}</a>
            <ThemeToggle/>
        </div>
    );
}
