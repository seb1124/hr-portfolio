// unused component

import { useState, useEffect } from "react";

const Navbar = () =>{

    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections =["home", "about", "experience", "projects"];
            let currentSection = "";

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if(element){
                    const rect = element.getBoundingClientRect();
                    if(rect.top <= 150 && rect.bottom >= 150){
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <div className="w-full bg-red-600 sticky top-0 p-4 z-10 bg-opacity-30 shadow-2xl">
            <ul className="flex flex-row  justify-center sm:justify-end text-white gap-8 pr-6 text-xl">
                {["home", "about", "experience", "projects"].map((section) => (
                    <li key={section}>
                        <a href={`#${section}`} className={activeSection === section ? "font-bold underline underline-offset-4" : ":text-white hover:opacity-70"}> {section.charAt(0).toUpperCase() + section.slice(1)} </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;