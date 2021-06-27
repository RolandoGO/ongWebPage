import * as React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputGroup from "./InputGroup";
import "../styles/NewsForm.css";

const ImgContainer = (props) => {
  if (props.imgUrl === "") {
    return (
      <div className="mt-5 bg-light text-secondary rounded-2 no-image d-flex justify-content-center align-items-center">
        <h5>No Image</h5>
      </div>
    );
  } else {
    return (
      <img
        src={props.imgUrl}
        className="pt-4 img-fluid rounded mx-auto d-block"
        alt=""
      />
    );
  }
};

function RegistrationForm() {
  const initialValues = {
    name: "",
    image: "",
    content: "",
    category: "A",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("El campo no puede estar vacío"),
    image: Yup.string()
      .url("No es un formato url valido")
      .required("El campo no puede estar vacío"),
    content: Yup.string()
      .min(20, "El contenido debe tener al menos 20 caracteres")
      .required("El campo no puede estar vacío"),
    category: Yup.string().required("El campo no puede estar vacío"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, values }) => (
          <Form className="container py-3 col-md-6 col-lg-4">
            <h1 className="fw-bold p-1 mb-4 text-center">Novedades</h1>

            <InputGroup
              identifier="category"
              type="select"
              labelText="Categoría"
              errors={errors}
            />

            <InputGroup
              identifier="name"
              labelText="Título"
              type="text"
              errors={errors}
            />

            <ImgContainer imgUrl={values.image} />
            <InputGroup
              identifier="image"
              labelText="Dirección url de la imagen"
              type="url"
              errors={errors}
            />

            <InputGroup
              identifier="content"
              type="textarea"
              labelText="Contenido"
              errors={errors}
            />

            <button
              type="submit"
              className="btn btn-primary btn-lg mx-auto d-block mt-5"
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegistrationForm;
