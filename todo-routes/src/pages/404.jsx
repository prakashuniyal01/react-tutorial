import React from "react";
import { Navbar } from "../components";

export const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container p-5 bg-light card my-5 border border-muted text-center">
        <h2 className="display-2"> oops!</h2>
        <p className="lead text-secondary"> read the url </p>
        {/* <button className="btn text-dark border border-muted"> Home</button> */}
      </div>
    </>
  );
};
