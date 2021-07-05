import React from "react";

export const CardActivityScreen = ({ activity }) => {
  const { img, name, createdAt } = activity;

  return (
    <div className="bg-card-activity mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={img}
            className="img-fluid rounded-start rounded-3 p-1"
            alt="foto"
          />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Creado en: <small>{createdAt}</small>
            </p>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <div className="card-body d-flex justify-content-center">
            <button className="m-2 btn btn-secondary">EDITAR</button>
            <button className="m-2 btn btn-danger">ELIMINAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};
