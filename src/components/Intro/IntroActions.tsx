import { motion } from "framer-motion";
import Button from "../ui/Button";

type Props = {
   onStart: () => void;
};

export default function IntroActions({ onStart }: Props) {
   return (
      <motion.div
         initial={{
            opacity: 0,
            y: 40,
         }}
         animate={{
            opacity: 1,
            y: 0,
         }}
         transition={{
            duration: 1,
            delay: 0.8,
         }}
         className="mt-10"
      >
         <Button onClick={onStart}>Start</Button>
      </motion.div>
   );
}
