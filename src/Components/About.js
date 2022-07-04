import React from "react";
import {
  NavLink,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";

import SubAbout from "./SubAbout";
import SubLocation from "./SubLocation";
import Head from "../Routes/Head";
const About = () => {
  return (
    <>
      <Head title="About" description="The About"></Head>
      <p>About</p>

      <nav>
        <NavLink to="SubAbout">About |</NavLink>
        <NavLink to="SubLocation"> SubLocation</NavLink>
      </nav>
      <Routes>
        <Route path="SubAbout" element={<SubAbout></SubAbout>}></Route>
        <Route path="SubLocation" element={<SubLocation></SubLocation>}></Route>
      </Routes>
    </>
  );
};

export default About;
