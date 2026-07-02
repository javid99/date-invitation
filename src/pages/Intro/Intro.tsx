import { useNavigate } from "react-router-dom";
import IntroActions from "../../components/Intro/IntroActions";
import IntroHeader from "../../components/Intro/IntroHeader";
import IntroStory from "../../components/Intro/IntroStory";
import { INTRO_LINES } from "../../constants/intro";
import GlassCard from "../../components/ui/GlassCard";
import PageContainer from "../../components/ui/PageContainer";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback } from "react";

function Intro() {
   const navigate = useNavigate();
   const [showButton, setShowButton] = useState(false);
   const handleFinished = useCallback(() => {
      setShowButton(true);
   }, []);

   return (
      <div className="text-center">
         <PageContainer>
            <GlassCard>
               <IntroHeader />

               <IntroStory onFinished={handleFinished} lines={INTRO_LINES} />

               <AnimatePresence>
                  {showButton && (
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                     >
                        <IntroActions onStart={() => navigate("/question")} />
                     </motion.div>
                  )}
               </AnimatePresence>
            </GlassCard>
         </PageContainer>
      </div>
   );
}

export default Intro;
