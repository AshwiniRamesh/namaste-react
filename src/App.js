import React, {lazy,Suspense, useState, useEffect} from "react";
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
import UserContext from "./utils/userContext";
// import Grocery from "./components/Grocery"; // normal import

//lazy loading
const Grocery = lazy(() => import("./components/Grocery")); 


const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name:"FromApp"
    }
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div>
    <UserContext.Provider value={{loggedInUser:userName}}>
    {/* <UserContext.Provider value={{loggedInUser:"FromHeader"}}> */} // if you want to hard code value
      <Header />
      </UserContext.Provider>
      <Outlet />
    </div>
    </UserContext.Provider>
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
