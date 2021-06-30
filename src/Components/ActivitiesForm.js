import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useFormik } from "formik";

export const ActivitiesForm = ({activity={
  name:"Pepe",
  image:"Juana",
  description:"Maria",
}}) => {
  const formik = useFormik({
    initialValues: 
     activity
    ,
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
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="form-group my-2">
                <label forhtml="image" className="my-2 mx-2">
                  Imagen url:
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="image"
                  value={formik.values.image}
                  onChange={formik.handleChange}
                />
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
                  data= {formik.values.description}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                  }}
                />
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
