import * as React from "react";

import { HeaderBackOffice } from "../components/HeaderBackOffice";
import NewsList from "../components/NewsList";

function News() {
  return (
    <>
      <HeaderBackOffice />
      <NewsList />
    </>
  );
}

export default News;
