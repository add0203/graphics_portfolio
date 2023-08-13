import React from "react";
import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "../src/component/footer/Footer";
import Navbar from "../src/component/navbar/Navbar";
import Navbar2 from "../src/component/navbar2/Navbar2";
import Home from "./component/home/Home";
import Services from "./component/services/Services";
import Work from "./component/work/Work";
import Review from "./component/reviews/Review";
import Contact from "./component/contact/Contact";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar2 />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/work",
          element: <Work />,
        },
        {
          path: "/review",
          element: <Review />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
