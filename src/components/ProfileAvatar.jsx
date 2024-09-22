import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from "framer-motion";
import { useRef } from 'react';
import modelPath from '../assets/3DModel/PortfolioAvatar.glb'; // Ensure path is correct

function Model() {
  const { scene } = useGLTF(modelPath); // Model imported and passed
//   scene.position.set(0, -2, 0);
  return <primitive object={scene} scale={[10,10,10]} />;
}


  

export default function ProfileAvatar() {
    
    const controlsRef = useRef();

  const handleMouseEnter = () => {
    if (controlsRef.current) {
      controlsRef.current.enableZoom = true; // Enable zoom
    }
  };

  const handleMouseLeave = () => {
    if (controlsRef.current) {
      controlsRef.current.enableZoom = false; // Disable zoom
    }
  };


  return (
    // <div className="w-full lg:w-1/2 lg:p-8 ">
    <div className="w-full lg:w-full h-full lg:p-1 ">
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
            {/* <OrbitControls /> */}
            <OrbitControls ref={controlsRef} enableZoom={false} />

            <Model />
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
}


