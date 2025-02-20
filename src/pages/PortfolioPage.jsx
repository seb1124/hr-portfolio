//socials
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

//languages
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

//frameworks
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

//dev tools
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaUnity } from "react-icons/fa";
import { SiAnaconda } from "react-icons/si";

//projects
import studyflash from "../assets/studyflash.png"


const PortfolioPage = () => {
    return(
        <div className="flex justify-center items-start h-screen pt-12 z-100">
            <div className="w-full ml-8 mr-8 xl:ml-0 xl:mr-0 xl:w-2/3 2xl:w-1/3 flex justify-center flex-col gap-12">




                
                <div className="flex justify-between items-center w-full border border-gray-500 p-5 rounded-md">
                    <div>
                        <h1 className="text-white font-bold text-xl">Hector Ramos</h1>
                        <h2 className="text-gray-200 text-sm"> Full-Stack Software Engineer</h2>
                    </div>
                    <div className="flex flex-row gap-2 text-white">
                        <a href="https://www.linkedin.com/in/hector-ramos/" target="_blank" className="hover:opacity-70"><FaLinkedin size={30}></FaLinkedin></a>
                        <a href="https://github.com/seb1124" target="_blank" className="hover:opacity-70"><FaGithubSquare size={30}></FaGithubSquare></a>
                        <a href="mailto:hector.ramos.cs@gmail.com" className="hover:opacity-70"><CiMail size={30}></CiMail></a>

                    </div>
                </div>





                <div className="text-white">
                    <h3 className="font-semibold text-xl pb-2"> about </h3>
                    <hr className="border-gray-500"></hr>
                    <p className="text-md text-gray-200 pt-2">I am a computer science student at the University of Central Florida with a passion for software engineering. During my time at UCF, I&apos;ve familiarized myself with quite a few technologies:</p>
                </div>




                <div className="text-white">
                    <h3 className="font-semibold text-xl pb-2 pt-6"> skills </h3>
                    <hr className="border-gray-500"></hr>

                    <div className="flex flex-col gap-8 text-gray-200 pt-6">
                        <div className="">
                            <h3 className="pb-2 underline underline-offset-4">Languages:</h3>
                            <ul className="flex flex-row gap-5">
                                <li><SiTypescript size={30}></SiTypescript></li>
                                <li><FaPython size={30}></FaPython></li>
                                <li><FaJava size={30}></FaJava></li>
                                <li><IoLogoJavascript size={30}></IoLogoJavascript></li>
                                <li><FaHtml5 size={30}></FaHtml5></li>
                                <li><FaCss3Alt size={30}></FaCss3Alt></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 text-gray-200 pt-6">
                        <div className="">
                            <h3 className="pb-2 underline underline-offset-4">Frameworks:</h3>
                            <ul className="flex flex-row gap-5">
                                <li><FaReact size={30}></FaReact></li>
                                <li><RiTailwindCssFill size={30}></RiTailwindCssFill></li>
                                <li><FaNodeJs size={30}></FaNodeJs></li>
                                <li><SiExpress size={30}></SiExpress></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 text-gray-200 pt-6">
                        <div className="">
                            <h3 className="pb-2 underline underline-offset-4">Developer Tools:</h3>
                            <ul className="flex flex-row gap-5">
                                <li><FaGithub size={30}></FaGithub></li>
                                <li><SiMongodb size={30}></SiMongodb></li>
                                <li><SiAnaconda size={30}></SiAnaconda></li>
                                <li><VscVscode size={30}></VscVscode></li>
                                <li><FaUnity size={30}></FaUnity></li>
                            </ul>
                        </div>
                    </div>

                </div>




                <div className="text-white">
                    <h3 className="font-semibold text-xl pb-2 pt-6"> experience </h3>
                    <hr className="border-gray-500"></hr>
                    <div className="flex flex-col gap-8 pt-6">
                        <div>
                            <h3 className="font-semibold text-lg"> Mixed Emerging Technology Integration Lab </h3>
                            <h4 className="text-sm text-gray-300">R&D Software Engineer Intern</h4>
                            <p className="text-md pt-2"> developed a proof-of-concept VR simulation showcasing the advantages of VR technology for radiation safety training in first responder scenarios.</p>
                            <p className="text-xs text-gray-300 pt-2"> C#, Unity</p>
                            <hr className="border-gray-500 mt-6 hidden"></hr>
                        </div>
                    </div>
                </div>




                <div className="text-white">
                    <h3 className="font-semibold text-xl pb-2 pt-6"> projects </h3>
                    <hr className="border-gray-500 mb-12"></hr>

                    <div className="flex flex-col gap-8">
                        <a href="https://studyflash.study/" target="_blank" className="block transition-transform duration-300 transform hover:scale-110">
                            <div className="flex justify-between items-center w-full border border-gray-500 p-5 rounded-md">
                                <div className="overflow-hidden w-32 h-32 rounded-md">
                                    <img src={studyflash} alt="Description" className="w-full h-full object-cover"/>
                                </div>
                                <div className="flex flex-col gap-4 w-72">
                                    <h3 className="text-2xl font-semibold"> StudyFlash </h3>
                                    <p className="text-sm"> a web application created for the KnightHacks VII hackathon that leverages AI to generate flashcards for study materials uploaded by users.</p>
                                    <p className="text-xs text-gray-300"> HTML, CSS, JavaScript, PHP, OpenAI API</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>



                
            </div>
        </div>
    );
}

export default PortfolioPage;

//{/* <div className="bg-black/60 backdrop-blur-sm p-6 rounded-xl shadow-lg w-full sm:w-6/12 min-h-full outline outline-1 outline-gray-500 mt-12">
                //<p className="text-white">my div</p>
            //</div> */}