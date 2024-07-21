import * as React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./component/header/Header";
import Body from "./component/body/Body";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import "./App.css";

const Layout = () => (
  <div>
    <Header />
    <div style={{ margin: "0px 20px" }}>
      <Outlet />
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
