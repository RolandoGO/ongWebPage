import * as React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputGroup from "./InputGroup";

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

const NestedSlides = (props) => {
  const listSlides = props.values.slides;
  return listSlides.map((slide, index) => {
    console.log(listSlides);
    return (
      <h4>
        {slide.name},{index}
      </h4>
    );
  });
};

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
  const initialValues = {
    name: "",
    wellcomeText: "",
    slides: [
      { image: "", text: "" },
      { image: "", text: "" },
      { image: "", text: "" },
    ],
  };

  const validationSchema = Yup.object({
    wellcomeText: Yup.string()
      .min(20, "El contenido debe tener al menos 20 caracteres")
      .required("El campo no puede estar vacío"),
    slides: Yup.array().of(
      Yup.object().shape({
        image: Yup.string()
          .url("No es un formato url valido")
          .matches(/\.(?:jpg|gif|png)/, "No es un formato de imagen valido")
          .required("El campo no puede estar vacío"),
        text: Yup.string().required("El campo no puede estar vacío"),
      })
    ),
    name: Yup.string().required("El campo no puede estar vacío"),
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
            <NestedSlides values={values} />
            <InputGroup
              identifier="wellcomeText"
              labelText="Texto de bienvenida"
              type="textarea"
              errors={errors}
            />

            <InputGroup
              identifier="slides[0].image"
              labelText="Url de la imagen 1"
              type="url"
              errors={errors}
            />

            <InputGroup
              identifier="slides[0].text"
              labelText="Texto de la imagen 1"
              type="text"
              errors={errors}
            />
            <InputGroup
              identifier="slides[1].image"
              labelText="Url de la imagen 2"
              type="url"
              errors={errors}
            />

            <InputGroup
              identifier="slides[1].text"
              labelText="Texto de la imagen 2"
              type="text"
              errors={errors}
            />
            <InputGroup
              identifier="slides[2].image"
              labelText="Url de la imagen 3"
              type="url"
              errors={errors}
            />

            <InputGroup
              identifier="slides[2].text"
              labelText="Texto de la imagen 3"
              type="text"
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
