import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";


const HomePage = () =>{
    return(
        <div id="home">
            <div className="min-h-screen flex flex-col items-center justify-center">
            
            <ParticlesBackground></ParticlesBackground>
            
            <motion.h1
                initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
                animate={{ opacity: 1, x: 0 }} // Slide in to position
                transition={{ duration: 2, ease: "easeOut" }} // Smooth effect
                className="text-white text-center text-6xl"
            >
                Hi, Im <span className="text-red-500">Hector</span>.
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
                animate={{ opacity: 1, x: 0 }} // Slide in to position
                transition={{ duration: 2, ease: "easeOut" }} // Smooth effect
                className="text-white text-center text-5xl pt-2"
            >
                Im a full-stack software developer.
            </motion.h2>
            
            <button className="bg-red-500 rounded-md text-white font-bold p-2 mt-6 hover:bg-red-700 animate-bounce flex items-center gap-2">View my work <FaArrowDown></FaArrowDown></button>
            </div>
        </div>
    )
}

export default HomePage;