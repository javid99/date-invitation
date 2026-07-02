import { Outlet } from "react-router-dom";

import BackgroundGlow from "../../components/ui/BackgroundGlow";
import FloatingHearts from "../../components/effects/FloatingHearts";

export default function AppLayout() {
   return (
      <main
         className="
      relative
      min-h-screen
      overflow-hidden
      bg-linear-to-br
      from-rose-50
      via-pink-50
      to-fuchsia-100
      "
      >
         <BackgroundGlow />

         <FloatingHearts />

         <Outlet />
      </main>
   );
}
