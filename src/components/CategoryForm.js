import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function CategoriesForm({ Category }) {

  const initialState = Category !== undefined?{_name,description} : '';
  const { _name, description } = Category !== undefined ? Category : '';
  const [addData, setData] = useState(initialState);

  const handleChange = (e, editor) => {
    const data = editor.getData();
    setData(data);
  };

  return (
    <div class='container justify-content-md-center'>
      <div class='row align-items-center'>
        <div class='col mb-3 my-3'>
          <label for='Categorie' class='form-label'>
            Category
          </label>
          <input
            type='text'
            class='form-control'
            id='CategorieName'
            placeholder='Enter a Name for the Categorie'
            value={ _name }
          />
          <div class='col mb-3 my-3'>
            <label for='CategorieDescription' class='form-label'>
              Description
            </label>
            <CKEditor
              editor={ClassicEditor}
              data={addData}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesForm;
