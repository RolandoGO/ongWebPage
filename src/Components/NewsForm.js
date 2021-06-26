import * as React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

function RegistrationForm() {
  const initialValues = {
    name: "",
    image: "",
    content: "",
    category: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("El campo no puede estar vacío"),
    content: Yup.string()
      .required("El campo no puede estar vacío")
      .min(20, "El campo debe tener al menos 20 caracteres"),
    category: Yup.string().required("El campo no puede estar vacío"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors }) => (
        <Form className="container py-3 col-md-6 col-lg-4">
          <h1 className="fw-bold p-1 mb-4">Formulario de Novedades</h1>
          <input name="name" type="text" labelText="Título" />
          <input name="image" type="file" labelText="Imagen" />
          <input
            name="content"
            type="text"
            labelText="Contenido"
            errors={errors}
          />
          <input
            name="category"
            type="text"
            labelText="Categoría"
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
  );
}

export default RegistrationForm;
