import { useState, useEffect } from "react";

const Navbar = () =>{

    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections =["home", "about", "projects", "experience"];
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
        <div className="w-full bg-red-500 sticky top-0 p-2 z-10 bg-opacity-70">
            <ul className="flex flex-row  justify-center sm:justify-end text-white gap-8 pr-6 text-2xl">
                {["home", "about", "projects", "experience"].map((section) => (
                    <li key={section}>
                        <a href={`#${section}`} className={activeSection === section ? "text-blue-300" : ":text-white"}> {section.charAt(0).toUpperCase() + section.slice(1)} </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;