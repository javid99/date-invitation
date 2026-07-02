/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

type TypewriterProps = {
   text: string;
   speed?: number;
   className?: string;
   cursor?: boolean;
   instant?: boolean;
   onComplete?: () => void;
};

export default function Typewriter({
   text,
   speed = 40,
   className = "",
   cursor = true,
   instant = false,
   onComplete,
}: TypewriterProps) {
   const [displayedText, setDisplayedText] = useState(instant ? text : "");

   const completedRef = useRef(false);

   useEffect(() => {
      if (instant) {
         setDisplayedText(text);

         if (!completedRef.current) {
            completedRef.current = true;
            onComplete?.();
         }

         return;
      }

      completedRef.current = false;
      setDisplayedText("");

      let index = 0;

      const interval = setInterval(() => {
         index++;

         setDisplayedText(text.slice(0, index));

         if (index >= text.length) {
            clearInterval(interval);

            if (!completedRef.current) {
               completedRef.current = true;
               onComplete?.();
            }
         }
      }, speed);

      return () => clearInterval(interval);
   }, [text, speed, instant]);

   return (
      <p className={className}>
         {displayedText}

         {cursor && !completedRef.current && <span className="animate-pulse">|</span>}
      </p>
   );
}
