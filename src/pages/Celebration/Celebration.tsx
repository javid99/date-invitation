import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

import { useEffect } from "react";
import FloatingHearts from "../../components/celebration/FloatingHearts";
import GlassCard from "../../components/ui/GlassCard";
import PageContainer from "../../components/ui/PageContainer";
import { supabase } from "../../lib/supabase";

export default function Celebration() {
   const { width, height } = useWindowSize();

   useEffect(() => {
      async function test() {
         const { data, error } = await supabase.from("invitations").select("*");

         console.log(data);
         console.log(error);
      }

      test();
   }, []);

   return (
      <>
         <Confetti width={width} height={height} recycle={false} numberOfPieces={250} />

         <FloatingHearts />

         <PageContainer>
            <GlassCard>
               <div className="text-center">
                  <motion.div
                     initial={{
                        scale: 0,
                        rotate: -180,
                     }}
                     animate={{
                        scale: 1,
                        rotate: 0,
                     }}
                     transition={{
                        type: "spring",
                        stiffness: 150,
                     }}
                     className="text-8xl"
                  >
                     🎉
                  </motion.div>

                  <motion.h1
                     initial={{
                        opacity: 0,
                        y: 20,
                     }}
                     animate={{
                        opacity: 1,
                        y: 0,
                     }}
                     transition={{
                        delay: 0.3,
                     }}
                     className="mt-8 text-4xl sm:text-5xl font-bold"
                  >
                     It's a Date!
                  </motion.h1>

                  <motion.p
                     initial={{
                        opacity: 0,
                     }}
                     animate={{
                        opacity: 1,
                     }}
                     transition={{
                        delay: 0.7,
                     }}
                     className="mt-8 text-lg sm:text-xl leading-9 text-gray-600"
                  >
                     I can't wait to spend this time with you. ❤️
                  </motion.p>
               </div>
            </GlassCard>
         </PageContainer>
      </>
   );
}
