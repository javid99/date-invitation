import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   children: ReactNode;
   variant?: "primary" | "secondary";
};

export default function Button({
   children,
   className = "",
   variant = "primary",
   ...props
}: ButtonProps) {
   const baseClasses = `
      relative
      overflow-hidden
      rounded-full
      px-6
      py-3
      text-sm
      sm:px-8
      sm:py-4
      sm:text-base
      font-semibold
      transition-all
      duration-300
      hover:scale-105
      active:scale-95
      disabled:cursor-not-allowed
      disabled:opacity-60
      cursor-pointer
   `;

   const variants = {
      primary: `
         bg-gradient-to-r
         from-pink-500
         to-rose-500
         text-white
         shadow-lg
         shadow-pink-300/40
         hover:shadow-pink-400/50
      `,
      secondary: `
         bg-white/80
         text-gray-700
         border
         border-pink-200
         hover:bg-white
         shadow-md
      `,
   };

   return (
      <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
         <span
            className="
               absolute
               inset-0
               -translate-x-full
               skew-x-12
               bg-white/20
               transition-transform
               duration-700
               hover:translate-x-full
            "
         />

         <span className="relative z-10">{children}</span>
      </button>
   );
}
