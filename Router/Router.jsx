import { createBrowserRouter } from "react-router-dom";
import Main from "../src/layouts/Main/Main";
import Home from "../src/layouts/Home/Home";
import DashboardLayout from "../src/layouts/AsideBar/DashboardLayout";
import Card from "../src/CssComponent/Cards/Card";
import Buttons from "../src/CssComponent/Buttons/Buttons";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard/button",
        element: <Buttons />,
      },
      {
        path: "dashboard/Card",
        element: <Card />,
      },
    ],
  },
]);
