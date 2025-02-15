// Language Icon Imports
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";


// Framework Icon Imports
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";


// Library Icon Imports
import { SiPandas } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiNumpy } from "react-icons/si";


//Tool Icon Imports
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaUnity } from "react-icons/fa";
import { SiAnaconda } from "react-icons/si";





const AboutPage = () =>{
    /*
    return(
        <div id="about">
            <div className="min-h-screen">
                <h1 className="text-white text-5xl text-center pb-12 sm:pb-0">About Me</h1>
                <div className="flex flex-col sm:flex-row mt-12 justify-center gap-8 items-center sm:items-start h-64">
                    <div className="text-white px-6 w-full sm:w-1/3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </div>
                    <div className="hidden sm:block w-[2px] h-full bg-red-500"></div>
                    <div className="flex flex-col text-white gap-4">
                        <div className="text-xl font-bold">
                            <h3>Languages</h3>
                            <ul className="pt-5 flex flex-row gap-3">
                                <li><FaPython size={30}></FaPython></li>
                            </ul>
                        </div>
                        <div className="text-xl font-bold">
                            <h3>Frameworks</h3>
                            <ul className="pt-5 flex flex-row gap-3">
                                <li><FaReact size={30}></FaReact></li>
                                <li><RiTailwindCssFill size={30}></RiTailwindCssFill></li>
                            </ul>
                        </div>
                        <div className="text-xl font-bold">
                            <h3>Libraries</h3>
                            <ul className="pt-5 flex flex-row gap-3">
                                <li><SiPandas size={30}></SiPandas></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    */

    return(
        <div id="about" className="scroll-mt-16">
            
            <div className="min-h-screen">
                
                <h1 className="text-white text-6xl underline underline-offset-8  font-bold decoration-red-500 decoration-8 text-center">About</h1>
                
                <div className="flex flex-col  justify-center items-center pt-16 mt-16 gap-8 w-full">
                    
                    <div className="text-white text-2xl sm:text-3xl w-full max-w-6xl leading-relaxed pl-4 pr-4 sm:pl-0 sm:pr-0"><hr className="mb-6"></hr>I&#39;m Hector Ramos, a Computer Science student at the University of Central Florida. The satisfaction of finding creative solutions to complex problems drives my passion and excitement for software engineering. During my time at UCF, I&#39;ve familiarized myself with quite a few technologies:<hr className="mt-6"></hr></div>
                    
                    <div className="text-white text-3xl w-full max-w-6xl flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-8">

                        <div className="flex flex-col gap-8">

                            <div className="font-bold">
                                <h3 className="text-white pb-6 underline underline-offset-8 decoration-red-500">Languages:</h3>
                                <ul className="flex flex-row gap-5">
                                    <li><SiTypescript size={50}></SiTypescript></li>
                                    <li><FaPython size={50}></FaPython></li>
                                    <li><FaJava size={50}></FaJava></li>
                                    <li><IoLogoJavascript size={50}></IoLogoJavascript></li>
                                    <li><FaHtml5 size={50}></FaHtml5></li>
                                    <li><FaCss3Alt size={50}></FaCss3Alt></li>
                                </ul>
                            </div>
                            <div className="font-bold">
                                <h3 className="text-white pb-6 underline underline-offset-8 decoration-red-500">Frameworks:</h3>
                                <ul className="flex flex-row gap-5">
                                    <li><FaReact size={50}></FaReact></li>
                                    <li><RiTailwindCssFill size={50}></RiTailwindCssFill></li>
                                    <li><FaNodeJs size={50}></FaNodeJs></li>
                                    <li><SiExpress size={50}></SiExpress></li>
                                </ul>
                            </div>

                        </div>

                        <div className="flex flex-col gap-8 -translate-x-9 sm:-translate-x-0">

                            <div className="font-bold">
                                <h3 className="text-white pb-6 underline underline-offset-8 decoration-red-500">Libraries:</h3>
                                <ul className="flex flex-row gap-5">
                                    <li><SiPandas size={50}></SiPandas></li>
                                    <li><SiScikitlearn size={50}></SiScikitlearn></li>
                                    <li><SiTensorflow size={50}></SiTensorflow></li>
                                    <li><SiNumpy size={50}></SiNumpy></li>
                                </ul>
                            </div>
                            <div className="font-bold">
                                <h3 className="text-white pb-6 underline underline-offset-8 decoration-red-500">Tools:</h3>
                                <ul className="flex flex-row gap-5">
                                    <li><FaGithub size={50}></FaGithub></li>
                                    <li><SiMongodb size={50}></SiMongodb></li>
                                    <li><SiAnaconda size={50}></SiAnaconda></li>
                                    <li><VscVscode size={50}></VscVscode></li>
                                    <li><FaUnity size={50}></FaUnity></li>
                                </ul>
                            </div>

                        </div>
                    

                    </div>

                </div>
            </div>
        </div>
    );
}

export default AboutPage;