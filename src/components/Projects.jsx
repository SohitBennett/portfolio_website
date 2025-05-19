// import { PROJECTS } from "../constants"
// import { motion } from "framer-motion"
// import ImageSlider from './ImageSlider'

// const Projects = () => {
//   return (
//     <div id="projects" className="section border-b border-neutral-900 pb-4">
//         <motion.h2 
//             whileInView={{ opacity: 1, y:0 }}
//             initial={{ opacity: 0, y: -100 }}
//             transition={{ duration: 0.5 }}
//             className="my-20 text-center text-4xl"
//         >
//             Projects
//         </motion.h2>
//         <div>
//             {PROJECTS.map((project, index) => (
//                 <div key={index} className="mb-8 flex flex-wrap lg:justify-center" >
//                     <motion.div 
//                         whileInView={{ opacity: 1, x:0 }}
//                         initial={{ opacity: 0, x: -100 }}
//                         transition={{ duration: 1 }}
//                         className="w-full lg:w-1/4">
//                         {/* <img 
//                             src={project.image}
//                             width={150}
//                             height={150}
//                             alt={project.title}
//                             className="mb-6 rounded"
//                         /> */}
                        
//                         <ImageSlider images={images} />
//                     </motion.div>
//                     <motion.div 
//                         whileInView={{ opacity: 1, x:0 }}
//                         initial={{ opacity: 0, x: 100 }}
//                         transition={{ duration: 1 }}
//                         className="w-full max-w-xl lg:w-3/4">
//                         <h6 className="mb fond-semibold">{project.title}</h6>
//                         <p className="mb-4 text-neutral-400">{project.description}</p>
//                         {project.technologies.map((tech,index) => (
//                             <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
//                             >
//                                 {tech}
//                             </span>
//                         ))}
//                     </motion.div>
//                 </div>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default Projects


// import { PROJECTS } from "../constants";
// import { motion } from "framer-motion";
// import ImageSlider from './ImageSlider';



// const importProjectImages = (folderName) => {
//     const images = import.meta.glob(`./projects/${folderName}/*.{jpg,png,gif}`);
//     return Object.keys(images);
//   };
  

// const Projects = () => {
//   return (
//     <div id="projects" className="section border-b border-neutral-900 pb-4">
//         <motion.h2 
//             whileInView={{ opacity: 1, y:0 }}
//             initial={{ opacity: 0, y: -100 }}
//             transition={{ duration: 0.5 }}
//             className="my-20 text-center text-4xl"
//         >
//             Projects
//         </motion.h2>
//         <div>
//             {PROJECTS.map((project, index) => {
//                 const images = importProjectImages(project.folderName);
//                 return (
//                     <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//                         <motion.div 
//                             whileInView={{ opacity: 1, x:0 }}
//                             initial={{ opacity: 0, x: -100 }}
//                             transition={{ duration: 1 }}
//                             className="w-full lg:w-1/4">
//                             <ImageSlider images={images} />
//                         </motion.div>
//                         <motion.div 
//                             whileInView={{ opacity: 1, x:0 }}
//                             initial={{ opacity: 0, x: 100 }}
//                             transition={{ duration: 1 }}
//                             className="w-full max-w-xl lg:w-3/4">
//                             <h6 className="mb font-semibold">{project.title}</h6>
//                             <p className="mb-4 text-neutral-400">{project.description}</p>
//                             {project.technologies.map((tech, index) => (
//                                 <span 
//                                     key={index} 
//                                     className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
//                                     {tech}
//                                 </span>
//                             ))}
//                         </motion.div>
//                     </div>
//                 );
//             })}
//         </div>
//     </div>
//   );
// };

// export default Projects;





import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";



const Projects = () => {
    return (
      <div id="projects" className="section border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Projects
        </motion.h2>
        <div>
          {PROJECTS.map((project, index) => {
            const folderName = project.folderName;
            return (
              <div key={index} className="mb-8 flex flex-wrap lg:flex-nowrap">
                
                {/* Slider */}
                <div className="mb-8 flex flex-wrap lg:w-2/3 xl:w-1/2 lg:mr-8">
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full"
                  >
                    <ImageSlider folderPath={folderName} />
                  </motion.div>
                </div>
  
                {/* Description */}
                <div className="mb-8 flex flex-wrap lg:w-1/3 xl:w-1/2 lg:pl-6">
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full"
                  >
                    <h6 className="font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                      >
                        {tech}
                      </span>
                    ))}
                    <div className="mt-4 flex items-center space-x-4">
                      {/* GitHub Link */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-neutral-400 hover:text-white transition"
                        title="GitHub Repository"
                      >
                        <FaGithub />
                      </a>

                      {/* Live Link (if exists) */}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl text-neutral-400 hover:text-white transition"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>

                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
export default Projects;



//-------old code 


// const Projects = () => {
//   return (
//     <div id="projects" className="section border-b border-neutral-900 pb-4">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Projects
//       </motion.h2>
//       <div>
//         {PROJECTS.map((project, index) => {
//           const folderName = project.folderName;
//           return (
//             <div key={index} className="mb-8 flex flex-wrap ">
                
//                 <div className="mb-8 flex flex-wrap lg:justify-center">
//                     <motion.div
//                         whileInView={{ opacity: 1, x: 0 }}
//                         initial={{ opacity: 0, x: -100 }}
//                         transition={{ duration: 1 }}
//                         // className="w-full lg:w-1/4"
//                         className="w-full lg:w-3/4 xl:w-2/3"
//                     >
//                         <ImageSlider folderPath={folderName} />
                        
//                     </motion.div>
//                 </div>
//                 <div className="mb-8 flex flex-wrap lg:justify-center">
//                     <motion.div
//                         whileInView={{ opacity: 1, x: 0 }}
//                         initial={{ opacity: 0, x: 100 }}
//                         transition={{ duration: 1 }}
//                         className="w-full max-w-xl lg:w-3/4"
//                     >
//                         <h6 className="mb font-semibold">{project.title}</h6>
//                         <p className="mb-4 text-neutral-400">{project.description}</p>
//                         {project.technologies.map((tech, index) => (
//                         <span
//                             key={index}
//                             className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
//                         >
//                             {tech}
//                         </span>
//                         ))}
//                     </motion.div>
//                 </div>    
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };