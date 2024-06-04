import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Foot from "./footer";

function Root() {
  return (
    <div>
      <div>
        <Nav />
        <div className="mt-5 container">
          <Outlet />
        </div>
        <Foot />
      </div>
    </div>
  );
}

export default Root;
