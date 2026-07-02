import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../../components/ui/Button";
import GlassCard from "../../components/ui/GlassCard";
import PageContainer from "../../components/ui/PageContainer";
import { NO_REPLIES } from "../../constants/question";

const BUTTON_WIDTH = 120;
const BUTTON_HEIGHT = 56;
const SAFE_PADDING = 20;

export default function Question() {
   const navigate = useNavigate();

   const containerRef = useRef<HTMLDivElement>(null);
   const yesButtonRef = useRef<HTMLDivElement>(null);

   const [noIndex, setNoIndex] = useState(0);

   const [noPos, setNoPos] = useState({
      left: 0,
      top: 0,
   });

   useEffect(() => {
      if (!containerRef.current || !yesButtonRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();

      const yesRect = yesButtonRef.current.getBoundingClientRect();

      setNoPos({
         left: yesRect.left - containerRect.left + yesRect.width + 20,

         top: yesRect.top - containerRect.top,
      });
   }, []);

   const handleYes = () => {
      navigate("/place");
   };

   const moveNoButton = () => {
      if (noIndex >= NO_REPLIES.length - 1) return;
      if (!containerRef.current || !yesButtonRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const yesRect = yesButtonRef.current.getBoundingClientRect();

      const forbidden = {
         left: yesRect.left - rect.left - 40,
         right: yesRect.right - rect.left + 40,
         top: yesRect.top - rect.top - 40,
         bottom: yesRect.bottom - rect.top + 40,
      };

      let nextLeft = 0;
      let nextTop = 0;

      let overlap = true;
      let tries = 0;

      while (overlap && tries < 50) {
         nextLeft =
            Math.random() * (rect.width - BUTTON_WIDTH - SAFE_PADDING * 2) + SAFE_PADDING;

         nextTop = Math.random() * (rect.height - BUTTON_HEIGHT - 240) + 220;

         overlap =
            nextLeft + BUTTON_WIDTH > forbidden.left &&
            nextLeft < forbidden.right &&
            nextTop + BUTTON_HEIGHT > forbidden.top &&
            nextTop < forbidden.bottom;

         tries++;
      }

      setNoPos({
         left: nextLeft,
         top: nextTop,
      });

      setNoIndex((prev) => prev + 1);
   };

   const handleNoClick = () => {
      if (noIndex === NO_REPLIES.length - 1) {
         navigate("/goodbye");
      }
   };

   return (
      <PageContainer>
         <GlassCard>
            <div ref={containerRef} className="relative min-h-130 sm:min-h-145">
               <div className="flex flex-col items-center text-center">
                  <motion.div
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     transition={{
                        type: "spring",
                        stiffness: 180,
                     }}
                     className="mb-5 text-5xl sm:mb-6 sm:text-7xl"
                  >
                     ❤️
                  </motion.div>

                  <motion.h1
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     className="text-2xl font-bold sm:text-4xl"
                  >
                     Will you go out with me?
                  </motion.h1>

                  <motion.p
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.2 }}
                     className="mt-4 max-w-md text-base leading-7 text-gray-600 sm:text-lg"
                  >
                     I'd really love to spend some time with you.
                  </motion.p>

                  <motion.div
                     ref={yesButtonRef}
                     className="mt-10 sm:mt-12 sm:-translate-x-14 -translate-x-13"
                  >
                     <Button onClick={handleYes}>Yes ❤️</Button>
                  </motion.div>
               </div>

               <motion.div
                  animate={{
                     left: noPos.left,
                     top: noPos.top,
                  }}
                  transition={{
                     type: "spring",
                     stiffness: 250,
                     damping: 18,
                  }}
                  className="absolute"
               >
                  <Button
                     variant="secondary"
                     onMouseDown={moveNoButton}
                     onClick={handleNoClick}
                  >
                     {NO_REPLIES[noIndex].button}
                  </Button>
               </motion.div>
            </div>
         </GlassCard>
      </PageContainer>
   );
}
