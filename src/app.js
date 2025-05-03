

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantsMenu from "./components/RestaurantsMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantsMenu from "./components/RestaurantsMenu.js";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
{
  path : "/",
  element : <AppLayout />,
  children : [
    {
      path: "/",
      element: <Body />,
    },
    {
      path : "/about",
      element: <About/>,
    },
    {
      path : "/contact",
      element: <Contact/>,
    },
    {
      path : "/restaurants/:resId",
      element: <RestaurantsMenu/>,
    }
  ],
  errorElement : <Error/>
},
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);




