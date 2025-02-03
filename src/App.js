import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router";
import About from "./components/AboutUs";
import Contact from "./components/ContactUs";
import Home from "./components/Home";
import Error from "./components/Error";
import Restaurant from "./components/RestuarantMenu";

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
      { path: "/contact", element: <Contact /> },
      { path: "/home", element: <Home /> },
      { path: "/Error", element: <Error /> },
      { path: "/restaurants/:restId", element: <Restaurant /> },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
