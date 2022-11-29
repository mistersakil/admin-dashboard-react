import { createBrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default routes;
