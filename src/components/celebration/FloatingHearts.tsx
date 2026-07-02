import { motion } from "framer-motion";

const hearts = Array.from({ length: 20 });

export default function FloatingHearts() {
   return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
         {hearts.map((_, index) => (
            <motion.div
               key={index}
               initial={{
                  y: "110vh",
                  x: Math.random() * window.innerWidth,
                  opacity: 0,
                  scale: 0.5,
               }}
               animate={{
                  y: "-10vh",
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 0.8],
               }}
               transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear",
               }}
               className="absolute text-2xl"
            >
               ❤️
            </motion.div>
         ))}
      </div>
   );
}
