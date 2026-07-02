import { motion } from "framer-motion";
import { Title } from "../ui/Typography";
import { fadeUp } from "../../lib/motion";

export default function IntroHeader() {
   return (
      <motion.div
         variants={fadeUp}
         initial="initial"
         animate="animate"
         transition={{
            duration: 1,
         }}
      >
         <Title>Hey 👋</Title>
      </motion.div>
   );
}
