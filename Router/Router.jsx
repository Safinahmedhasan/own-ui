import { createBrowserRouter } from "react-router-dom";
import Main from "../src/layouts/Main/Main";
import Home from "../src/layouts/Home/Home";
import DashboardLayout from "../src/layouts/AsideBar/DashboardLayout";
import Button from "../src/CssComponent/button";
import Card from "../src/CssComponent/Card";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: '/',
            element: <Home/>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout/>,
      children:[
        {
          path: 'dashboard/button',
          element: <Button/>
        },
        {
          path: 'dashboard/Card',
          element: <Card/>
        }
      ]
    }
  ]);