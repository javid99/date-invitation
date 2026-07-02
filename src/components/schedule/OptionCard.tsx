import { motion } from "framer-motion";

type Props = {
   title: string;
   selected: boolean;
   onClick: () => void;
};

export default function OptionCard({ title, selected, onClick }: Props) {
   return (
      <motion.button
         whileHover={{ scale: 1.03 }}
         whileTap={{ scale: 0.97 }}
         onClick={onClick}
         className={`
            w-full
            rounded-xl
            sm:rounded-2xl
            border-2
            p-4
            sm:p-5
            text-sm
            sm:text-base
            font-medium
            transition-all
            duration-300
            cursor-pointer

            ${
               selected
                  ? "border-pink-500 bg-pink-50"
                  : "border-gray-200 bg-white hover:border-pink-300"
            }
         `}
      >
         {title}
      </motion.button>
   );
}
