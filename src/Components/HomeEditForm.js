import * as React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputGroup from "./InputGroup";
import "../styles/HomeEditForm.css";

/* const ImgContainer = (props) => {
  if (props.errors.image || props.imgUrl === "") {
    return (
      <div className="mt-5 bg-light text-secondary rounded-2 no-image d-flex justify-content-center align-items-center border">
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
}; */

/* const FormNewsTitle = (props) => {
  const title = props.id ? "Edicion" : "Creación";
  return (
    <h1 className="fw-bold p-1 mb-4 text-center">
      Formulario de {title} de novedades
    </h1>
  );
}; */

const handleSubmit = (values) => {
  const editNews = () => {};
  const createNews = () => {};
  if (values.id !== 0) {
    return editNews(values);
  } else {
    return createNews(values);
  }
};

function RegistrationForm(props) {
  const { news } = props;
  const initialValues = {
    id: news?.id || 0,
    name: news?.name || "",
    image: news?.image || "",
    content: news?.content || "",
    category: news?.category || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("El campo no puede estar vacío"),
    image: Yup.string()
      .url("No es un formato url valido")
      .matches(/\.(?:jpg|gif|png)/, "No es un formato de imagen valido")
      .required("El campo no puede estar vacío"),
    content: Yup.string()
      .min(20, "El contenido debe tener al menos 20 caracteres")
      .required("El campo no puede estar vacío"),
    category: Yup.string().required("El campo no puede estar vacío"),
  });

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ errors, values }) => (
          <Form className="container py-3 col-md-8 col-lg-5 mb-4">
            <h1 className="fw-bold p-1 mb-4 text-center">
              Formulario Edición Home
            </h1>
            <InputGroup
              identifier="content"
              type="textarea"
              labelText="Contenido"
              errors={errors}
            />

            <InputGroup
              identifier="name"
              labelText="Título"
              type="text"
              errors={errors}
            />

            <InputGroup
              identifier="image"
              labelText="Dirección url de la imagen"
              type="url"
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
