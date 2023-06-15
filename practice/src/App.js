import React from "react";
import { RouterProvider } from "react-router-dom";
import { APP_ROUTER } from "./routes/Index";
import { Footer, Navbar } from "./shared";

const App = () => {
  return (
    <>
      <Navbar />
      <section className="container">
        <RouterProvider router={APP_ROUTER} />
      </section>
      <Footer />
    </>
  );
};

export default App;
