import React from "react";
import { TitlesComponent } from "../../components/TitlesComponent";
import Description from "./components/Description";
import Members from "./components/members";

function index() {
  return (
    <div className="container">
      <TitlesComponent title="Nosotros" />
      <Description />
      <Members />
    </div>
  );
}

export default index;
