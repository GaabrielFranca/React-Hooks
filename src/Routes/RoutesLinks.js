import React from "react";
import { NavLink } from "react-router-dom";
const RoutesLinks = () => {
  return (
    <>
      <nav>
        {" "}
        <NavLink to={""} end>
          Home |
        </NavLink>
        <NavLink to={"/About"}>About |</NavLink>
        <NavLink to={"/Contact"}>Contact</NavLink>
      </nav>
    </>
  );
};

export default RoutesLinks;
