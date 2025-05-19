// import { HERO_CONTENT } from "../constants";
// import { motion, transform } from "framer-motion";
// import ProfileAvatar from "./ProfileAvatar";
// import { Link } from 'react-scroll';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';


// const container = (delay) => ({
//     hidden: {x: -100, opacity: 0},
//     visible: {
//         x: 0,
//         opacity: 1,
//         transition: {duration: 0.5, delay: delay},
//     }
// })

// const Hero = () => {
//   return (
//     // <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//     // <div className="relative z-10 min-h-screen flex flex-col justify-start">
//     <div className="relative z-10 h-auto flex flex-col justify-start">

//         <div className="flex flex-wrap ">
//             <div className="w-full flex flex-col lg:w-1/2">

//                 <div className="flex flex-col items-center lg:items-start">
//                     <motion.h1 
//                         variants={container(0)}
//                         initial="hidden"
//                         animate="visible"
//                         className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 
//                         lg:text-8xl "
//                     >
//                         Sohit Joshi
//                     </motion.h1>
//                     <motion.span 
//                         variants={container(0.5)}
//                         initial="hidden"
//                         animate="visible"
//                         className="bg-gradient-to-r from-pink-300 via-slate-500
//                         to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
//                     >
//                         Full Stack Developer
//                     </motion.span>
//                     <motion.p 
//                         variants={container(1)}
//                         initial="hidden"
//                         animate="visible"
//                         className="my-2 max-w-xl py-6 font-light tracking-tighter"
//                     >
//                         {HERO_CONTENT}
//                     </motion.p>
//                     <a
//                         href="https://drive.google.com/file/d/1kOtQpRMWD4J5kQBj4zWBJtzrI_5s5yCE/view?usp=drive_link" 
//                         target="_blank" 
//                         rel="noopener noreferrer" 
//                         className="mt-4 inline-flex items-center rounded-full bg-blue-500 px-6 py-2 text-white font-semibold shadow-lg transition-transform duration-200 hover:scale-105"
//                     >
//                         <FontAwesomeIcon icon={faDownload} className="h-5 w-5 mr-2" />
//                         Download CV
//                     </a>
//                 </div>
//             </div>
//             <div className="w-full flex flex-col lg:w-1/2 ">
//                 <div className="flex justify-center">
//                     <ProfileAvatar />
//                 </div>
//             </div>
//         </div>


//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:w-[13%] w-[40%]">
//             <Link 
//                 to="skills" 
//                 smooth={true} 
//                 duration={1500} 
//                 className='cursor-pointer'>
//                 <img src="https://bearwise.org/wp-content/uploads/2015/04/scroll.gif" />
//             </Link>
//         </div>



//     </div>
//   )
// }

// export default Hero





//                     {/* <motion.img 
//                         initial={{ x: 100, opacity: 0}}
//                         animate={{ x: 0, opacity: 1}}
//                         transition={{ duration: 1, delay: 1.2}}  
//                         src={profilePic2} 
//                         alt="Kevin Rush" 
//                     /> */}






//////------------ Full working with cursor at center--------

import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import ProfileAvatar from "./ProfileAvatar";
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import animationData from '../assets/animations/coding-laptop.json'; 
import Lottie from "lottie-react";
import mouseDownAnimation from "../assets/mouseDowngif.json";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="relative z-10 h-auto flex flex-col justify-start items-center">
      <div className="flex flex-wrap">
        <div className="w-auto flex flex-col lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-4xl font-semibold tracking-tight lg:mt-16 lg:text-6xl"
            >
              Sohit Joshi
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-full py-4 font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
            <a
              // href="https://drive.google.com/file/d/1kOtQpRMWD4J5kQBj4zWBJtzrI_5s5yCE/view?usp=drive_link"
              href="https://drive.google.com/file/d/1kOtQpRMWD4J5kQBj4zWBJtzrI_5s5yCE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-white font-semibold shadow-lg transition-transform duration-200 hover:scale-105"
            >
              <FontAwesomeIcon icon={faDownload} className="h-5 w-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>
        <div className="w-auto flex flex-col lg:w-1/2">
          <div className="flex justify-center">
            <Lottie
              loop
              animationData={animationData}
              play
              style={{ width: '300px', height: '300px' }} 
            />
          </div>
        </div>  
      </div>

      {/* <div className="flex justify-center mt-8 mb-15"> 
        <Link to="skills" smooth={true} duration={1500} className="cursor-pointer">
          <img
            // src="https://bearwise.org/wp-content/uploads/2015/04/scroll.gif"
            src="src\assets\mouse_down_animation.lottie"
            alt="Scroll Down"
            className="relative w-[45%] md:w-[13%] mx-auto"
          />
        </Link>
      </div> */}
      {/* <div className="w-24 h-24">
        <Lottie animationData={mouseDownAnimation} loop={true} />
      </div> */}
      <div className="flex justify-center mt-8 mb-15 cursor-pointer">
        <Link to="skills" smooth={true} duration={1500}>
          <div className="w-24 h-24">
            <Lottie animationData={mouseDownAnimation} loop={true} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
