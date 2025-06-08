import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantsMenu from "./components/RestaurantsMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantsMenu from "./components/RestaurantsMenu.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore.js";
import Cart from "./components/Cart.js";
// import Grocery from "./components/grocery.js";

const Grocery = lazy(() => import("./components/grocery.js"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  // Authentication
  useEffect(() => {
    // fetct api
    const data = {
      name: "Prateek raj",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={AppStore}>
      <UserContext.Provider value={{LogedInUser: userName, setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/cart",
        element:<Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
