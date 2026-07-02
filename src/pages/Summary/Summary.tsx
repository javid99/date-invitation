import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import GlassCard from "../../components/ui/GlassCard";
import PageContainer from "../../components/ui/PageContainer";
import Button from "../../components/ui/Button";

import { getPlace } from "../../constants/place";
import { useDateStore } from "../../store/dateStore";

export default function Summary() {
   const navigate = useNavigate();

   const { place, day, time } = useDateStore();

   const selectedPlace = getPlace(place);

   return (
      <PageContainer>
         <GlassCard>
            <div className="text-center">
               <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-5xl sm:text-6xl lg:text-7xl"
               >
                  💌
               </motion.div>

               <h1 className="mt-5 text-2xl font-bold sm:mt-6 sm:text-3xl lg:text-4xl">
                  Everything looks perfect!
               </h1>

               <div className="my-8 h-px bg-pink-200 sm:my-10" />

               <div className="space-y-6 sm:space-y-7">
                  <div>
                     <p className="text-4xl sm:text-5xl">{selectedPlace?.emoji}</p>

                     <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                        {selectedPlace?.title}
                     </h2>
                  </div>

                  <div>
                     <p className="text-3xl sm:text-4xl">📅</p>

                     <h2 className="mt-2 text-lg sm:text-xl">{day}</h2>
                  </div>

                  <div>
                     <p className="text-3xl sm:text-4xl">🕕</p>

                     <h2 className="mt-2 text-lg sm:text-xl">{time}</h2>
                  </div>
               </div>

               <div className="my-8 h-px bg-pink-200 sm:my-10" />

               <p className="mx-auto max-w-md text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                  I'm really looking forward to spending time with you.
               </p>

               <motion.div
                  whileHover={{
                     scale: 1.05,
                  }}
                  className="mt-8 sm:mt-10"
               >
                  <Button onClick={() => navigate("/celebration")}>Confirm ❤️</Button>
               </motion.div>
            </div>
         </GlassCard>
      </PageContainer>
   );
}
