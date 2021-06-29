import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Formik, useFormik, Form } from "formik";
import * as Yup from "yup";
import AlertMessage from "./AlertMessage";

function CategoriesForm({ Category }) {
  const initialState = Category !== undefined ? { _name, description } : "";
  const { _name, description } = Category !== undefined ? Category : "";
  const [isVisible,setIsVisible] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Too Short!")
        .max(15, "Too Long!")
        .required("Required"),
      description: Yup.string()
        .min(3, "Too Short!")
        .max(400, "Too Long!")
        .required("Required"),
    }),
    onSubmit: (values) => {
      //Connect with categoryService.js
      //POST if it is a new category element
      //PATCH if it is an actualization of the category element
      //alert(JSON.stringify(values, null, 2));
    },
  });
  const handleClick = () => {
    if (formik.errors.description || formik.errors.name) {
      AlertMessage('info','Errors',`name:${formik.errors.name}<br>description:${formik.errors.description}`)
     }
  }
    
  return (
    <div className='container justify-content-md-center'>
      <div className='row align-items-center'>
        <form onSubmit={formik.handleSubmit}>
          <div className='col mb-3 my-3'>
            <label className='form-label'>Category</label>
            <input
              type='text'
              className='form-control'
              name='name'
              id='CategorieName'
              placeholder='Enter a Name for the Categorie'
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <div className='col mb-3 my-3'>
              <label className='form-label'>Description</label>
              <CKEditor
                id='inputText'
                className='inputText'
                editor={ClassicEditor}
                data={formik.values.description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  formik.values.description = { data }.data;
                }}
              />
              <button
                className='my-3 btn flex-grow-0 btn-outline-primary border-start-1'
                type='submit' onClick={handleClick}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CategoriesForm;