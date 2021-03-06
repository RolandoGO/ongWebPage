import React from "react";
import { TitlesComponent } from "../../components/TitlesComponent";
import Description from "./components/description";
import Members from "./components/members";

function Index() {
  return (
    <div className="container">
      <TitlesComponent title="Nosotros" />
      <Description />
      <Members />
    </div>
  );
}

export default Index;
