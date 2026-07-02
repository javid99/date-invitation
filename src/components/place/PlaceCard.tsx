import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Props = {
   emoji: string;
   title: string;
   subtitle: string;
   selected: boolean;
   onClick: () => void;
};

export default function PlaceCard({ emoji, title, subtitle, selected, onClick }: Props) {
   return (
      <motion.button
         whileHover={{ scale: 1.03 }}
         whileTap={{ scale: 0.97 }}
         onClick={onClick}
         className={`
            relative
            w-full
            rounded-2xl
            border-2
            p-4
            sm:rounded-3xl
            sm:p-6
            text-left
            transition-all
            duration-300
            cursor-pointer

            ${
               selected
                  ? "border-pink-500 bg-pink-50 shadow-lg"
                  : "border-gray-200 bg-white hover:border-pink-300"
            }
         `}
      >
         {selected && (
            <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
               <Check className="text-pink-500" size={20} />
            </div>
         )}

         <div className="text-4xl sm:text-5xl">{emoji}</div>

         <h3 className="mt-3 text-lg font-bold sm:mt-4 sm:text-xl">{title}</h3>

         <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">{subtitle}</p>
      </motion.button>
   );
}
