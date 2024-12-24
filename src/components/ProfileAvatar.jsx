import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from "framer-motion";
import { useRef } from 'react';
import modelPath from '../assets/3DModel/PortfolioAvatar.glb'; 

function Model() {
  const { scene } = useGLTF(modelPath); 
  return <primitive object={scene} scale={[10,10,10]} />;
}


  

export default function ProfileAvatar() {
    
    const controlsRef = useRef();

  const handleMouseEnter = () => {
    if (controlsRef.current) {
      controlsRef.current.enableZoom = true; 
    }
  };

  const handleMouseLeave = () => {
    if (controlsRef.current) {
      controlsRef.current.enableZoom = false; 
    }
  };


  return (

    <div className="w-full lg:w-full lg:p-1 ">
      <div className="flex justify-center">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="model-container h-[100vh] w-full"
        >
          <Canvas camera={{ position: [0, 20, 25], fov: 75 }} className='h-full w-full'>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} />

            
            <OrbitControls ref={controlsRef} enableZoom={false} />

            <Model />
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
}


// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { motion } from "framer-motion";
// import { useRef, useEffect } from 'react';
// import { useSpring, a } from '@react-spring/three';
// import modelPath from '../assets/3DModel/PortfolioAvatar.glb';

// function Model() {
//   const { scene } = useGLTF(modelPath);
  
//   // Locate the arm in your model. Adjust the name based on the model structure.
//   let arm = null;
//   scene.traverse((node) => {
//     if (node.name === 'RightArm') {
//       arm = node;
//     }
//   });

//   // Apply animation to the arm using react-spring
//   const { rotation } = useSpring({
//     rotation: [0, 0, Math.PI / 4],  // Set waving rotation here
//     from: { rotation: [0, 0, 0] },
//     config: { duration: 1000 },
//     loop: { reverse: true },
//   });

//   return (
//     <a.primitive
//       object={scene}
//       scale={[10, 10, 10]}
//       // Apply animation to the arm
//       rotation={arm ? rotation : [0, 0, 0]}
//     />
//   );
// }

// export default function ProfileAvatar() {
//   const controlsRef = useRef();

//   const handleMouseEnter = () => {
//     if (controlsRef.current) {
//       controlsRef.current.enableZoom = true;
//     }
//   };

//   const handleMouseLeave = () => {
//     if (controlsRef.current) {
//       controlsRef.current.enableZoom = false;
//     }
//   };

//   return (
//     <div className="w-full lg:w-full lg:p-1 relative">
//       {/* Display "Hi!" */}
//       <div
//         style={{
//           position: "absolute",
//           top: "20px",
//           left: "20px",
//           fontSize: "2rem",
//           color: "white",
//           fontFamily: "sans-serif",
//         }}
//       >
//         Hi!
//       </div>
//       <div className="flex justify-center">
//         <motion.div
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 1.2 }}
//           className="model-container h-[100vh] w-full"
//         >
//           <Canvas
//             camera={{ position: [0, 20, 25], fov: 75 }}
//             className="h-auto w-full"
//           >
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[10, 10, 10]} />
//             <OrbitControls ref={controlsRef} enableZoom={false} />

//             {/* Model with waving arm */}
//             <Model />
//           </Canvas>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
