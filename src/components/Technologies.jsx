// import { BiLogoPostgresql } from "react-icons/bi"
// import { DiPostgresql, DiRedis } from "react-icons/di"
// import { FaNodeJs } from "react-icons/fa"
// import { RiReactjsLine } from "react-icons/ri"
// import { SiMongodb } from "react-icons/si"
// import { TbBrandNextjs } from "react-icons/tb"
// import { motion } from "framer-motion"

// const inconVariants = (duration) => ({
//     initial: { y: -10},
//     animate: {
//         y: [10, -10],
//         transition: {
//             duration: duration,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "reverse",
//         },
//     }
// })

// const Technologies = () => {
//   return (
//     <div id='skills' className="section border-b border-neutral-800 pb-24 ">
//         <motion.h2
//             whileInView={{ opacity: 1, y: 0}}
//             initial={{ opacity: 0, y: -100 }}
//             transition={{ duration: 1.5 }}
//             className="my-20 text-center text-4xl"
//         >
//             Technologies
//         </motion.h2>
//         <motion.div 
//             whileInView={{ opacity: 1, x: 0}}
//             initial={{ x: -100, opacity: 0}}
//             transition={{ duration: 1.5}}
//             className="flex flex-wrap items-center justify-center gap-4"
//         >
//             <motion.div 
//                 variants={inconVariants(2.5)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <RiReactjsLine className="text-7xl text-cyan-400"/>
//             </motion.div>
//             <motion.div 
//                 variants={inconVariants(3)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <TbBrandNextjs className="text-7xl"/>
//             </motion.div>
//             <motion.div 
//                 variants={inconVariants(5)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <SiMongodb className="text-7xl text-green-500"/>
//             </motion.div>
//             <motion.div 
//                 variants={inconVariants(2)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <DiRedis className="text-7xl text-red-700"/>
//             </motion.div>
//             <motion.div 
//                 variants={inconVariants(6)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <FaNodeJs className="text-7xl text-green-500"/>
//             </motion.div>
//             <motion.div 
//                 variants={inconVariants(4)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <BiLogoPostgresql className="text-7xl text-sky-700"/>
//             </motion.div>
//         </motion.div>
//     </div>
//   )
// }

// export default Technologies


//---------adding more icons---------------


// import { BiLogoPostgresql } from "react-icons/bi"
// import { DiPostgresql, DiRedis, DiGit } from "react-icons/di"
// import { FaNodeJs } from "react-icons/fa"
// import { RiReactjsLine } from "react-icons/ri"
// import { SiMongodb, SiTailwindcss, SiPostman, SiThreedotjs } from "react-icons/si"
// import { TbBrandNextjs } from "react-icons/tb"
// import { motion } from "framer-motion"

// const inconVariants = (duration) => ({
//     initial: { y: -10},
//     animate: {
//         y: [10, -10],
//         transition: {
//             duration: duration,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "reverse",
//         },
//     }
// })

// const Technologies = () => {
//   return (
//     <div id='skills' className="section border-b border-neutral-800 pb-24 ">
//         <motion.h2
//             whileInView={{ opacity: 1, y: 0}}
//             initial={{ opacity: 0, y: -100 }}
//             transition={{ duration: 1.5 }}
//             className="my-20 text-center text-4xl"
//         >
//             Technologies
//         </motion.h2>
//         <motion.div 
//             whileInView={{ opacity: 1, x: 0}}
//             initial={{ x: -100, opacity: 0}}
//             transition={{ duration: 1.5}}
//             className="flex flex-wrap items-center justify-center gap-4"
//         >
//             {/* ReactJS Icon */}
//             <motion.div 
//                 variants={inconVariants(2.5)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <RiReactjsLine className="text-7xl text-cyan-400"/>
//             </motion.div>

//             {/* Next.js Icon */}
//             <motion.div 
//                 variants={inconVariants(3)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <TbBrandNextjs className="text-7xl"/>
//             </motion.div>

//             {/* MongoDB Icon */}
//             <motion.div 
//                 variants={inconVariants(5)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <SiMongodb className="text-7xl text-green-500"/>
//             </motion.div>

//             {/* Redis Icon */}
//             <motion.div 
//                 variants={inconVariants(2)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <DiRedis className="text-7xl text-red-700"/>
//             </motion.div>

//             {/* Node.js Icon */}
//             <motion.div 
//                 variants={inconVariants(6)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <FaNodeJs className="text-7xl text-green-500"/>
//             </motion.div>

//             {/* PostgreSQL Icon */}
//             <motion.div 
//                 variants={inconVariants(4)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <BiLogoPostgresql className="text-7xl text-sky-700"/>
//             </motion.div>

//             {/* Tailwind CSS Icon */}
//             <motion.div 
//                 variants={inconVariants(2)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <SiTailwindcss className="text-7xl text-blue-500"/>
//             </motion.div>

//             {/* Three.js Icon */}
//             <motion.div 
//                 variants={inconVariants(4)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <SiThreedotjs className="text-7xl text-black"/>
//             </motion.div>

//             {/* Postman Icon */}
//             <motion.div 
//                 variants={inconVariants(5)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <SiPostman className="text-7xl text-orange-500"/>
//             </motion.div>

//             {/* Git Icon */}
//             <motion.div 
//                 variants={inconVariants(3)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl border-4 border-neutral-800 p-4"
//             >
//                 <DiGit className="text-7xl text-red-500"/>
//             </motion.div>

//         </motion.div>
//     </div>
//   )
// }

// export default Technologies



//-----------trying animation with icons ( working cube ) 


// import { BiLogoPostgresql } from "react-icons/bi";
// import { DiRedis } from "react-icons/di";
// import { FaNodeJs } from "react-icons/fa";
// import { RiReactjsLine } from "react-icons/ri";
// import { SiMongodb, SiTailwindcss, SiPostman, SiThreedotjs } from "react-icons/si";
// import { motion } from "framer-motion";

// const cubeVariants = {
//   animate: {
//     rotateY: [0, 360],
//     rotateX: [0, 360],
//     transition: {
//       repeat: Infinity,
//       duration: 10,
//       ease: "linear",
//     },
//   },
// };

// const Technologies = () => {
//   return (
//     <div
//       id="skills"
//       className="section border-b border-neutral-800 pb-24 flex items-center justify-center"
//       style={{ perspective: "1000px", height: "400px", overflow: "visible" }} // Ensure perspective and no overflow issues
//     >
//       <motion.div
//         className="relative w-64 h-64"
//         variants={cubeVariants}
//         animate="animate"
//         style={{
//           transformStyle: "preserve-3d",
//           position: "relative",
//           width: "200px",
//           height: "200px",
//         }}
//       >
//         {/* Each side of the cube */}
//         <motion.div
//           className="absolute flex items-center justify-center w-full h-full"
//           style={{ transform: "rotateY(0deg) translateZ(100px)", background: "#1a1a1a", border: "1px solid #fff" }}
//         >
//           <RiReactjsLine className="text-5xl text-cyan-400" />
//         </motion.div>

//         <motion.div
//           className="absolute flex items-center justify-center w-full h-full"
//           style={{ transform: "rotateY(90deg) translateZ(100px)", background: "#1a1a1a", border: "1px solid #fff" }}
//         >
//           <SiThreedotjs className="text-5xl text-purple-500" />
//         </motion.div>

//         <motion.div
//           className="absolute flex items-center justify-center w-full h-full"
//           style={{ transform: "rotateY(180deg) translateZ(100px)", background: "#1a1a1a", border: "1px solid #fff" }}
//         >
//           <SiMongodb className="text-5xl text-green-500" />
//         </motion.div>

//         <motion.div
//           className="absolute flex items-center justify-center w-full h-full"
//           style={{ transform: "rotateY(270deg) translateZ(100px)", background: "#1a1a1a", border: "1px solid #fff" }}
//         >
//           <DiRedis className="text-5xl text-red-700" />
//         </motion.div>

//         <motion.div
//           className="absolute flex items-center justify-center w-full h-full"
//           style={{ transform: "rotateX(90deg) translateZ(100px)", background: "#1a1a1a", border: "1px solid #fff" }}
//         >
//           <FaNodeJs className="text-5xl text-green-500" />
//         </motion.div>

//         <motion.div
//           className="absolute flex items-center justify-center w-full h-full"
//           style={{ transform: "rotateX(-90deg) translateZ(100px)", background: "#1a1a1a", border: "1px solid #fff" }}
//         >
//           <BiLogoPostgresql className="text-5xl text-sky-700" />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Technologies;





// ------------------ trying transparent cube [ Working ]

import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
// import { SiMongodb, SiTailwindcss, SiPostman, SiThreedotjs } from "react-icons/si";
import { SiMongodb, SiTailwindcss, SiPostman, SiExpress } from "react-icons/si";

import { motion } from "framer-motion";

const cubeVariants = {
  animate: {
    rotateY: [0, 360],
    rotateX: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 10,
      ease: "linear",
    },
  },
};

const Technologies = () => {
  return (
    <div
      id="skills"
      className="section  pb-24 flex flex-col items-center justify-center"
      style={{ perspective: "1000px", height: "600px", overflow: "visible" }}
    >
      {/* Heading of the page */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      {/* Rotating cube */}
      <motion.div
        className="relative w-64 h-64"
        variants={cubeVariants}
        animate="animate"
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
          width: "200px",
          height: "200px",
        }}
      >
        {/* Cube faces with transparent background */}
        <motion.div
          className="absolute flex items-center justify-center w-full h-full"
          style={{ 
            transform: "rotateY(0deg) translateZ(100px)",
            background: "rgba(26, 26, 26, 0.2)",  
            border: "1px solid rgba(255, 255, 255, 0.2)"  
          }}
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>

        <motion.div
          className="absolute flex items-center justify-center w-full h-full"
          style={{ 
            transform: "rotateY(90deg) translateZ(100px)",
            background: "rgba(26, 26, 26, 0.2)", 
            border: "1px solid rgba(255, 255, 255, 0.2)" 
          }}
        >
          <SiTailwindcss className="text-5xl text-blue-400" />
        </motion.div>

        <motion.div
          className="absolute flex items-center justify-center w-full h-full"
          style={{ 
            transform: "rotateY(180deg) translateZ(100px)",
            background: "rgba(26, 26, 26, 0.2)", 
            border: "1px solid rgba(255, 255, 255, 0.2)" 
          }}
        >
          <SiMongodb className="text-5xl text-green-500" />
        </motion.div>

        <motion.div
          className="absolute flex items-center justify-center w-full h-full"
          style={{ 
            transform: "rotateY(270deg) translateZ(100px)",
            background: "rgba(26, 26, 26, 0.2)", 
            border: "1px solid rgba(255, 255, 255, 0.2)" 
          }}
        >
          <SiPostman className="text-5xl text-orange-500" />
        </motion.div>

        <motion.div
          className="absolute flex items-center justify-center w-full h-full"
          style={{ 
            transform: "rotateX(90deg) translateZ(100px)",
            background: "rgba(26, 26, 26, 0.2)", 
            border: "1px solid rgba(255, 255, 255, 0.2)" 
          }}
        >
          <FaNodeJs className="text-5xl text-green-500" />
        </motion.div>

        <motion.div
          className="absolute flex items-center justify-center w-full h-full"
          style={{ 
            transform: "rotateX(-90deg) translateZ(100px)",
            background: "rgba(26, 26, 26, 0.2)", 
            border: "1px solid rgba(255, 255, 255, 0.2)" 
          }}
        >
          <SiExpress className="text-5xl text-gray-300" />

        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;







// /------------------  working cube with white border and icons 

// import React, { useRef, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";

// // Import local PNG images
// import reactLogo from '../assets/logos/react-logo.png';
// import nodeLogo from '../assets/logos/node-logo.png';
// import tailwindLogo from '../assets/logos/tailwind-logo.png';
// import gitLogo from '../assets/logos/git-logo.png';
// import postmanLogo from '../assets/logos/postman-logo.png';
// import javascriptLogo from '../assets/logos/javascript-logo.png';

// const Cube = () => {
//   const cubeRef = useRef();
//   const edgesRef = useRef(); // Ref for edges

//   // Rotate the cube continuously
//   useFrame(() => {
//     cubeRef.current.rotation.y += 0.01;
//     cubeRef.current.rotation.x += 0.01;
//   });

//   // Use useEffect to load textures
//   useEffect(() => {
//     const loader = new THREE.TextureLoader();

//     // Create materials with textures
//     const materials = [
//       new THREE.MeshStandardMaterial({ 
//         map: loader.load(reactLogo), 
//         transparent: true,
//         opacity: 1,
//         roughness: 0.2, // Adjust roughness for shine
//         metalness: 0.2,
//       }), // Front face
//       new THREE.MeshStandardMaterial({ 
//         map: loader.load(nodeLogo), 
//         transparent: true, 
//         opacity: 0.8,
//       }), // Back face
//       new THREE.MeshStandardMaterial({ 
//         map: loader.load(tailwindLogo), 
//         transparent: true, 
//         opacity: 0.8,
//       }), // Top face
//       new THREE.MeshStandardMaterial({ 
//         map: loader.load(gitLogo), 
//         transparent: true, 
//         opacity: 0.8,
//       }), // Bottom face
//       new THREE.MeshStandardMaterial({ 
//         map: loader.load(postmanLogo), 
//         transparent: true, 
//         opacity: 0.8,
//       }), // Right face
//       new THREE.MeshStandardMaterial({ 
//         map: loader.load(javascriptLogo),
//         transparent: true, 
//         opacity: 0.8, // Make this face fully transparent or use another logo
//       }), // Left face
//     ];

//     <ambientLight intensity={1.0} />
//     // Assign materials to the cube
//     cubeRef.current.material = materials;

//     // Clean up on component unmount
//     return () => {
//       materials.forEach(material => {
//         material.map.dispose(); // Dispose textures to free memory
//       });
//     };
//   }, []);

//   return (
//     <mesh ref={cubeRef}>
//       <boxGeometry args={[2, 2, 2]} /> {/* Cube geometry */}
//       {/* Cube material */}
//       <meshStandardMaterial transparent opacity={0.8} />

//       {/* Add edges as part of the same mesh */}
//       <lineSegments ref={edgesRef}>
//         <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
//         <lineBasicMaterial color="white" linewidth={2} />
//       </lineSegments>
//     </mesh>
//   );
// };

// const Technologies = () => {
//   return (
//     <div id="skills" className="section border-b border-neutral-800 pb-24">
//       <h2 className="my-20 text-center text-4xl">Technologies</h2>
//       <Canvas style={{ height: "500px" }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Cube />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// };

// export default Technologies;




//----------------------  woring double sided cube 


// import React, { useRef, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";

// // Import local PNG images
// import reactLogo from '../assets/logos/react-logo.png';
// import nodeLogo from '../assets/logos/node-logo.png';
// import tailwindLogo from '../assets/logos/tailwind-logo.png';
// import gitLogo from '../assets/logos/git-logo.png';
// import postmanLogo from '../assets/logos/postman-logo.png';

// const Cube = () => {
//   const cubeRef = useRef();
//   const edgesRef = useRef(); // Ref for edges

//   // Rotate the cube continuously
//   useFrame(() => {
//     cubeRef.current.rotation.y += 0.01;
//     cubeRef.current.rotation.x += 0.01;
//   });

//   // Use useEffect to load textures
//   useEffect(() => {
//     const loader = new THREE.TextureLoader();

//     // Create materials with textures
//     const materials = [
//       new THREE.MeshStandardMaterial({
//         map: loader.load(reactLogo, (texture) => {
//           texture.minFilter = THREE.LinearFilter; // Set minification filter
//           texture.magFilter = THREE.LinearFilter; // Set magnification filter
//         }),
//         transparent: true,
//         opacity: 0.8,
//         roughness: 0.2,
//         metalness: 0.5,
//         side: THREE.DoubleSide, // Allow rendering on both sides
//       }), // Front face

//       new THREE.MeshStandardMaterial({
//         map: loader.load(nodeLogo, (texture) => {
//           texture.minFilter = THREE.LinearFilter; // Set minification filter
//           texture.magFilter = THREE.LinearFilter; // Set magnification filter
//         }),
//         transparent: true,
//         opacity: 0.8,
//         roughness: 0.2,
//         metalness: 0.5,
//         side: THREE.DoubleSide, // Allow rendering on both sides
//       }), // Back face

//       new THREE.MeshStandardMaterial({
//         map: loader.load(tailwindLogo, (texture) => {
//           texture.minFilter = THREE.LinearFilter; // Set minification filter
//           texture.magFilter = THREE.LinearFilter; // Set magnification filter
//         }),
//         transparent: true,
//         opacity: 0.8,
//         roughness: 0.2,
//         metalness: 0.5,
//         side: THREE.DoubleSide, // Allow rendering on both sides
//       }), // Top face

//       new THREE.MeshStandardMaterial({
//         map: loader.load(gitLogo, (texture) => {
//           texture.minFilter = THREE.LinearFilter; // Set minification filter
//           texture.magFilter = THREE.LinearFilter; // Set magnification filter
//         }),
//         transparent: true,
//         opacity: 0.8,
//         roughness: 0.2,
//         metalness: 0.5,
//         side: THREE.DoubleSide, // Allow rendering on both sides
//       }), // Bottom face

//       new THREE.MeshStandardMaterial({
//         map: loader.load(postmanLogo, (texture) => {
//           texture.minFilter = THREE.LinearFilter; // Set minification filter
//           texture.magFilter = THREE.LinearFilter; // Set magnification filter
//         }),
//         transparent: true,
//         opacity: 0.8,
//         roughness: 0.2,
//         metalness: 0.5,
//         side: THREE.DoubleSide, // Allow rendering on both sides
//       }), // Right face

//       new THREE.MeshStandardMaterial({
//         color: "transparent",
//         transparent: true,
//         opacity: 0.0, // Make this face fully transparent or use another logo
//       }), // Left face
//     ];

//     // Assign materials to the cube
//     cubeRef.current.material = materials;

//     // Clean up on component unmount
//     return () => {
//       materials.forEach(material => {
//         material.map.dispose(); // Dispose textures to free memory
//       });
//     };
//   }, []);

//   return (
//     <mesh ref={cubeRef}>
//       <boxGeometry args={[2, 2, 2]} /> {/* Cube geometry */}
//       {/* Add edges as part of the same mesh */}
//       <lineSegments ref={edgesRef}>
//         <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
//         <lineBasicMaterial color="white" linewidth={2} />
//       </lineSegments>
//     </mesh>
//   );
// };

// const Technologies = () => {
//   return (
//     <div id="skills" className="section border-b border-neutral-800 pb-24">
//       <h2 className="my-20 text-center text-4xl">Technologies</h2>
//       <Canvas style={{ height: "500px" }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Cube />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// };

// export default Technologies;








