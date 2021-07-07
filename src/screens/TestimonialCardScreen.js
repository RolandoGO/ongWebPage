import React from "react";
import Swal from 'sweetalert2';
import { deleteTestimonials } from "../services/testimonials";

export const TestimonialCardScreen = ({ testimonial }) => {
  const { img, name, id  } = testimonial;

  const deleteTestimonialAlert = () => {
    Swal.fire({
        title: '¿Seguro que quieres borrar el testimonio?',
        text: "El testimonio se perdera permanentemente",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si, borrar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado!',
            'Su testimonio se borro correctamente.',
            'success'
          )
          deleteTestimonials(id)
        }
      })
  };

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
        <div className="col-md-4 d-flex align-items-center">
          <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <div className="card-body d-flex justify-content-center">
            <button className="m-2 btn btn-secondary">EDITAR</button>
            <button className="m-2 btn btn-danger" onClick={() => deleteTestimonialAlert()}>ELIMINAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};
