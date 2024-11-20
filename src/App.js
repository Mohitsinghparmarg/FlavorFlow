import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import  Shimmer  from "./components/Shimmer";
import { UserContext } from "./utills/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const About   = lazy(() => import("./components/About"))
const Cart   = lazy(() => import("./components/Cart"))
const Contact   = lazy(() => import("./components/Contact"))
const RestaurantMenu   = lazy(() => import("./components/RestaurantMenu"))

const AppLayOut = () => {

  const [Username,setUserName] = useState();

  useEffect(()=>{
     
     const data = {
         name : "mohit singh parmar"
     }
     setUserName(data.name)
  },[]);

  return (
    <UserContext.Provider value={{loggedInUser : Username,setUserName}}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
    </UserContext.Provider>
  );
};



const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <About/>
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resmenu/:resId",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <RestaurantMenu/>
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
