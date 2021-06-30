import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsExclamationCircleFill } from "react-icons/bs";

export const ActivitiesForm = ({
  activity = {
    name: "Pepe",
    image: "Juana",
    description: "Luis",
  },
}) => {
  const inputHandler = (event, editor) => {
    formik.setFieldValue("signator_text", editor.getData());
  };
  const formik = useFormik({
    initialValues: activity,
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Campo Obligatorio"),
      image: Yup.string().required("Campo Obligatorio"),
      description: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required("Campo Obligatorio"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <React.Fragment>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-8 border p-5 ">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group my-2">
                <label forhtml="name" className="my-2">
                  Nombre
                </label>
                <input
                  type="name"
                  className="form-control"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="border  border-danger rounded mt-3 text-danger p-1 align-items-center d-flex justify-content-center">
                    {formik.errors.name}
                    <BsExclamationCircleFill className="mx-2" />
                  </div>
                ) : null}
              </div>
              <div className="form-group my-2">
                <label forhtml="image" className="my-2 mx-2">
                  Imagen url:
                </label>
                <input
                  {...formik.getFieldProps("image")}
                  type="name"
                  className="form-control "
                  name="image"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.image}
                />
                {formik.touched.image && formik.errors.image ? (
                  <div className="border  border-danger rounded mt-3 text-danger p-1 align-items-center d-flex justify-content-center">
                    {formik.errors.image}
                    <BsExclamationCircleFill className="mx-2" />
                  </div>
                ) : null}
              </div>
              <div className="form-group my-2">
                <label forhtml="description" className="my-2">
                  Descripción
                </label>
                <CKEditor
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  id="description"
                  editor={ClassicEditor}
                  data={formik.values.description}
                  onChange={inputHandler}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div className="border rounded mt-3 text-danger p-1 align-items-center d-flex justify-content-center">
                    {formik.errors.description}
                    <BsExclamationCircleFill className="mx-2" />
                  </div>
                ) : null}
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
