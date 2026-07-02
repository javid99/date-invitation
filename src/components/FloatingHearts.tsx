import { motion } from "framer-motion";

const hearts = ["❤️", "💖", "💕", "💗"];

export default function FloatingHearts() {
   return (
      <>
         {hearts.map((heart, index) => (
            <motion.div
               key={index}
               className="absolute text-3xl"
               initial={{
                  y: 100,
                  opacity: 0,
               }}
               animate={{
                  y: -600,
                  opacity: [0, 1, 1, 0],
               }}
               transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: index,
               }}
               style={{
                  left: `${20 + index * 20}%`,
               }}
            >
               {heart}
            </motion.div>
         ))}
      </>
   );
}
