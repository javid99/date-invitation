import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import Intro from "../pages/Intro/Intro";
import Question from "../pages/Question/Question";
import Goodbye from "../pages/Goodbye/Goodbye";
import Place from "../pages/Place/Place";
import Schedule from "../pages/Schedule/Schedule";
import Summary from "../pages/Summary/Summary";
import Celebration from "../pages/Celebration/Celebration";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      children: [
         {
            index: true,
            element: <Intro />,
         },
         {
            path: "question",
            element: <Question />,
         },
         {
            path: "place",
            element: <Place />,
         },
         {
            path: "schedule",
            element: <Schedule />,
         },
         {
            path: "summary",
            element: <Summary />,
         },
         {
            path: "celebration",
            element: <Celebration />,
         },
         {
            path: "goodbye",
            element: <Goodbye />,
         },
      ],
   },
]);
