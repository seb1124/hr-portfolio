// unused page


import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
//import ParticlesBackground from "../components/ParticlesBackground";


const HomePage = () =>{

    function directToAbout(){
        window.location.href = "#about";
    }

    return(
        <div id="home">
            <div className="min-h-screen flex flex-col items-center justify-center">
                        
            <motion.h1
                initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
                animate={{ opacity: 1, x: 0 }} // Slide in to position
                transition={{ duration: 2, ease: "easeOut" }} // Smooth effect
                className="text-white text-center text-6xl"
            >
                Hi, I&#39;m <span className="text-red-500">Hector</span>.
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
                animate={{ opacity: 1, x: 0 }} // Slide in to position
                transition={{ duration: 2, ease: "easeOut" }} // Smooth effect
                className="text-white text-center text-5xl pt-2"
            >
                I&#39;m a full-stack software developer.
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 50}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: .7, ease: "easeOut"}}
            >
                <button className="bg-red-500 rounded-md text-white font-bold p-2 mt-6 hover:bg-red-700 animate-bounce flex items-center gap-2" onClick={directToAbout}> Learn More <FaArrowDown></FaArrowDown></button>
            </motion.div>
            
            </div>

        </div>
    )
}

export default HomePage;