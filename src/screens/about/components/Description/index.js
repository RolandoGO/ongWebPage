import * as React from "react";
import "./description.css";

function index({ text }) {
  return (
    <section className="text-center lh-base fs-5 p-5 shadow-sm rounded-2 description">
      <p>{text}</p>
    </section>
  );
}

export default index;
