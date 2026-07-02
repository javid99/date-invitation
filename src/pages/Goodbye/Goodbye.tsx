import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import GlassCard from "../../components/ui/GlassCard";
import PageContainer from "../../components/ui/PageContainer";
import Button from "../../components/ui/Button";

export default function Goodbye() {
   const navigate = useNavigate();

   return (
      <PageContainer>
         <GlassCard>
            <div className="flex flex-col items-center text-center">
               <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                     type: "spring",
                     stiffness: 180,
                  }}
                  className="text-5xl sm:text-6xl lg:text-7xl"
               >
                  💛
               </motion.div>

               <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-5 text-2xl font-bold text-gray-800 sm:mt-6 sm:text-3xl lg:text-4xl"
               >
                  That's completely okay.
               </motion.h1>

               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 max-w-lg space-y-3 px-2 text-base leading-7 text-gray-600 sm:mt-8 sm:space-y-4 sm:px-0 sm:text-lg sm:leading-8"
               >
                  <p>Thank you for taking the time to go through this little website.</p>

                  <p>I just wanted to be honest about how I felt.</p>

                  <p>No hard feelings at all.</p>

                  <p>I truly wish you lots of happiness and beautiful moments ahead.</p>

                  <p className="font-medium text-pink-500">Take care. 🌸</p>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 sm:mt-10"
               >
                  <Button variant="secondary" onClick={() => navigate("/")}>
                     One more chance? 😊
                  </Button>
               </motion.div>
            </div>
         </GlassCard>
      </PageContainer>
   );
}
