import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerItem } from "../../lib/motion";
import { Subtitle } from "./Typography";

type Props = {
   children: ReactNode;
   className?: string;
};

export default function AnimatedText({ children, className = "" }: Props) {
   return (
      <motion.div
         variants={staggerItem}
         className={className}
         transition={{ duration: 0.8 }}
      >
         <Subtitle>{children}</Subtitle>
      </motion.div>
   );
}
