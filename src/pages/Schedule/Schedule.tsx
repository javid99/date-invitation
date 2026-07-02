import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import GlassCard from "../../components/ui/GlassCard";
import PageContainer from "../../components/ui/PageContainer";
import Button from "../../components/ui/Button";

import OptionCard from "../../components/schedule/OptionCard";

import { DAYS, TIMES } from "../../constants/schedule";

import { useDateStore } from "../../store/dateStore";

export default function Schedule() {
   const navigate = useNavigate();

   const { day, time, setDay, setTime } = useDateStore();

   return (
      <PageContainer>
         <GlassCard>
            <div className="text-center">
               <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-5xl sm:text-6xl"
               >
                  📅
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
                  Pick a day
               </motion.h1>

               <p className="mt-3 text-base leading-7 text-gray-600 sm:text-lg">
                  When are you free?
               </p>

               <div className="mt-8 grid gap-3 sm:gap-4">
                  {DAYS.map((item) => (
                     <OptionCard
                        key={item}
                        title={item}
                        selected={day === item}
                        onClick={() => setDay(item)}
                     />
                  ))}
               </div>

               <motion.h2
                  initial={{
                     opacity: 0,
                  }}
                  animate={{
                     opacity: 1,
                  }}
                  className="mt-8 text-xl font-bold sm:mt-10 sm:text-2xl"
               >
                  Choose a time
               </motion.h2>

               <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
                  {TIMES.map((item) => (
                     <OptionCard
                        key={item}
                        title={item}
                        selected={time === item}
                        onClick={() => setTime(item)}
                     />
                  ))}
               </div>

               <AnimatePresence>
                  {day && time && (
                     <motion.div
                        initial={{
                           opacity: 0,
                           y: 20,
                        }}
                        animate={{
                           opacity: 1,
                           y: 0,
                        }}
                        exit={{
                           opacity: 0,
                        }}
                        className="mt-8 sm:mt-10"
                     >
                        <Button onClick={() => navigate("/summary")}>Next ❤️</Button>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </GlassCard>
      </PageContainer>
   );
}
