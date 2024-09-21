import { BiLogoPostgresql } from "react-icons/bi"
import { DiPostgresql, DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { motion } from "framer-motion"

const inconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
        <motion.h2
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl"
        >
            Technologies
        </motion.h2>
        <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ x: -100, opacity: 0}}
            transition={{ duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4"
        >
            <motion.div 
                variants={inconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
                variants={inconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <TbBrandNextjs className="text-7xl"/>
            </motion.div>
            <motion.div 
                variants={inconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
                variants={inconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <DiRedis className="text-7xl text-red-700"/>
            </motion.div>
            <motion.div 
                variants={inconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
                variants={inconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies