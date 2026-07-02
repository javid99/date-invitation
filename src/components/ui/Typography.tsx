import type { ReactNode } from "react";

type TypographyProps = {
   children: ReactNode;
};

export function Title({ children }: TypographyProps) {
   return (
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
         {children}
      </h1>
   );
}

export function Subtitle({ children }: TypographyProps) {
   return (
      <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
         {children}
      </p>
   );
}
