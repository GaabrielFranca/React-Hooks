import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesLinks from "./RoutesLinks";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Error404 from "../Components/Error404";

const RoutesMain = () => {
  return (
    <>
      <BrowserRouter>
        <RoutesLinks></RoutesLinks>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="About/*" element={<About />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesMain;
