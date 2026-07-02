import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Button from "../../components/ui/Button";
import GlassCard from "../../components/ui/GlassCard";
import PageContainer from "../../components/ui/PageContainer";

import PlaceCard from "../../components/place/PlaceCard";

import { PLACES } from "../../constants/place";
import { useDateStore } from "../../store/dateStore";

export default function Place() {
   const navigate = useNavigate();

   const { place, setPlace } = useDateStore();

   return (
      <PageContainer>
         <GlassCard>
            <div className="text-center">
               <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-5xl sm:text-6xl"
               >
                  ❤️
               </motion.div>

               <motion.h1
                  initial={{
                     opacity: 0,
                     y: 15,
                  }}
                  animate={{
                     opacity: 1,
                     y: 0,
                  }}
                  className="mt-5 text-2xl font-bold sm:mt-6 sm:text-3xl lg:text-4xl"
               >
                  Awesome!!
               </motion.h1>

               <p className="mt-3 text-base leading-7 text-gray-600 sm:mt-4 sm:text-lg">
                  Where would you like to go?
               </p>

               <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5">
                  {PLACES.map((item) => (
                     <PlaceCard
                        key={item.id}
                        {...item}
                        selected={place === item.id}
                        onClick={() => setPlace(item.id)}
                     />
                  ))}
               </div>

               <AnimatePresence>
                  {place && (
                     <motion.div
                        initial={{
                           opacity: 0,
                           y: 15,
                        }}
                        animate={{
                           opacity: 1,
                           y: 0,
                        }}
                        exit={{
                           opacity: 0,
                        }}
                        className="mt-6 sm:mt-8"
                     >
                        <Button onClick={() => navigate("/schedule")}>Next →</Button>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </GlassCard>
      </PageContainer>
   );
}
