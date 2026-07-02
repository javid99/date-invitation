import type { ReactNode } from "react";

type Props = {
   children: ReactNode;
};

export default function PageContainer({ children }: Props) {
   return (
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 md:py-12">
         {children}
      </main>
   );
}
