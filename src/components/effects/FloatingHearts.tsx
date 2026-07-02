import { motion } from "framer-motion";

const hearts = [
   { id: 1, left: "15%", delay: 0 },
   { id: 2, left: "35%", delay: 2 },
   { id: 3, left: "60%", delay: 4 },
   { id: 4, left: "80%", delay: 1 },
];

export default function FloatingHearts() {
   return (
      <>
         {hearts.map((heart) => (
            <motion.div
               key={heart.id}
               className="pointer-events-none absolute text-2xl"
               style={{
                  left: heart.left,
                  bottom: "-40px",
               }}
               initial={{
                  opacity: 0,
                  y: 0,
               }}
               animate={{
                  opacity: [0, 1, 1, 0],
                  y: -900,
               }}
               transition={{
                  duration: 12,
                  repeat: Infinity,
                  delay: heart.delay,
                  ease: "linear",
               }}
            >
               ❤️
            </motion.div>
         ))}
      </>
   );
}
