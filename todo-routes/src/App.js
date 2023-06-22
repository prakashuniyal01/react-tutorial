import React from "react";
import { RouterProvider } from "react-router-dom";
import { APP_ROUTER } from "./routes";

export const App = () => {
  return (
    <>
      <section className="container">
        <RouterProvider router={APP_ROUTER} />
      </section>
    </>
  );
};
