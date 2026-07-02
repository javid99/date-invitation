import { useState } from "react";
import Typewriter from "../ui/Typewriter";

type Props = {
   lines: string[];
   onFinished?: () => void;
};

export default function IntroStory({ lines, onFinished }: Props) {
   const [currentLine, setCurrentLine] = useState(0);

   return (
      <div className="mt-6 space-y-3 text-center sm:mt-8 sm:space-y-4">
         {lines.map((line, index) => {
            if (index > currentLine) return null;

            return (
               <Typewriter
                  key={index}
                  text={line}
                  instant={index < currentLine}
                  cursor={index === currentLine}
                  speed={35}
                  className="mx-auto max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8"
                  onComplete={() => {
                     if (index !== currentLine) return;

                     if (currentLine < lines.length - 1) {
                        setCurrentLine((prev) => prev + 1);
                     } else {
                        onFinished?.();
                     }
                  }}
               />
            );
         })}
      </div>
   );
}
