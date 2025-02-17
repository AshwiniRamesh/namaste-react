import React, {lazy,Suspense} from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router";
import {AboutParentClassComponent,About} from "./components/AboutUs";
import Contact from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Restaurant from "./components/RestuarantMenu";
// import Grocery from "./components/Grocery"; // normal import

//lazy loading
const Grocery = lazy(() => import("./components/Grocery")); 

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
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/about-class-component", element: <AboutParentClassComponent /> },
      { path: "/contact", element: <Contact /> },
      { path: "/home", element: <Body /> },
      { path: "/error", element: <Error /> },
      { path: "/restaurants/:restId", element: <Restaurant /> },
      { path: "/cart", element: <Cart /> },
      { path: "/grocery", element: <Suspense fallback={<h1>Show this untill Grocery bundle is loaded</h1>}><Grocery /></Suspense> },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
