import React from "react";
import Home from "./pages/home/Home";
import routes from "./routes";
import { RouterProvider } from "react-router-dom";
const App = () => {
  return (
    <RouterProvider router={routes}>
      <Home />
    </RouterProvider>
  );
};

export default App;
