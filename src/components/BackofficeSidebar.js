import React from "react";
import "../styles/backofficeSidebar.css";

function BackofficeSidebar(props) {
  function openSidebar() {
    let show = props.show;

    if (show) {
      return "sidebar sidebar-open shadow";
    } else {
      return "sidebar";
    }
  }

  let sidebarStatus = openSidebar();

  return (
    <div id="backofficeSidebar" className={sidebarStatus}>
      <div className="mx-4 p-2 d-flex align-items-center justify-content-between">
        <h4 className="me-2 mb-0 fw-bold text-muted">Menú</h4>
        <button
          type="button"
          className="btn-close text-reset"
          aria-label="Close"
          onClick={props.handleClose}
        ></button>
      </div>
      <div className="mx-4 mt-2 p-2">
        <ul className="mt-3 px-2">
          <li className="my-4 pt-3">
            <a
              className="text-decoration-none fw-bold fs-5 p-2 d-block"
              href="/#"
            >
              Home
            </a>
          </li>
          <li className="my-4">
            <a
              className="text-decoration-none fw-bold fs-5 p-2 d-block"
              href="/#"
            >
              Nosotros
            </a>
          </li>
          <li className="my-4">
            <a
              className="text-decoration-none fw-bold fs-5 p-2 d-block"
              href="/#"
            >
              Actividades
            </a>
          </li>
          <li className="my-4">
            <a
              className="text-decoration-none fw-bold fs-5 p-2 d-block"
              href="/#"
            >
              Contribuyente
            </a>
          </li>
          <li className="my-4">
            <a
              className="text-decoration-none fw-bold fs-5 p-2 d-block"
              href="/#"
            >
              Contacto
            </a>
          </li>
          <li className="my-4">
            <a
              className="text-decoration-none fw-bold fs-5 p-2 d-block"
              href="/#"
            >
              Novedades
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BackofficeSidebar;
