import React from "react";
import Landingpage from "../components/landingpage";
import NavBar from "../components/navbar";

export default function home() {
  return (
    <>
      <NavBar menu={"dashboard"} />
      <Landingpage />
    </>
  );
}
