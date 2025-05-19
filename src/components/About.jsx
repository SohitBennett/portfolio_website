import { ABOUT_TEXT2 } from "../constants";
import { motion } from "framer-motion";
import profilePic2 from "../assets/SohitJoshiProfilePic2.png";
import ImageSlider from "./ImageSlider";

const About = () => {
    const folderName = "about";
  return (
    <div id="aboutme" className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-6xl font-semibold tracking-tighter">
            About
            <span className="text-neutral-900"> Me</span> 
        </h2>
        <div className="flex flex-wrap">
            <motion.div 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ x: -100, opacity: 0}}
                transition={{ duration: 0.5}}
                className="w-full lg:w-1/2 lg:p-8"
            >
                {/* <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={profilePic2} alt="about" />
                </div> */}
                <ImageSlider folderPath={folderName} />
            </motion.div>
            <motion.div 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ x: 100, opacity: 0}}
                transition={{ duration: 0.5}}
                className="w-full lg:w-1/2"
            >
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6 text-xl">{ABOUT_TEXT2}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About