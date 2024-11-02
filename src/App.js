import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import  Shimmer  from "./components/Shimmer";

const Grocery = lazy(() => import("./components/Grocery"));
const About   = lazy(() => import("./components/About"))
const Cart   = lazy(() => import("./components/Cart"))
const Contact   = lazy(() => import("./components/Contact"))
const RestaurantMenu   = lazy(() => import("./components/RestaurantMenu"))

const AppLayOut = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
