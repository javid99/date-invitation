import type { ReactNode } from "react";

type Props = {
   children: ReactNode;
};

export default function GlassCard({ children }: Props) {
   return (
      <div
         className="
            w-full
            max-w-2xl
            rounded-3xl
            border
            border-white/40
            bg-white/60
            backdrop-blur-xl
            shadow-[0_20px_80px_rgba(0,0,0,.15)]
            p-6
            sm:p-8
            md:p-10
            lg:p-14
         "
      >
         {children}
      </div>
   );
}
