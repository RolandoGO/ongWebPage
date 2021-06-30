import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export const ActivitiesForm = () => {
  const [description, setDescription] = useState(null);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-8 border p-5 ">
            <form>
              <div className="form-group my-2">
                <label forhtml="name" className="my-2">
                  Nombre
                </label>
                <input type="name" className="form-control" id="name" />
              </div>
              <div className="form-group my-2">
                <label forhtml="image" className="my-2">
                  Imagen:
                </label>
                <input
                  type="file"
                  className="form-control-file form-control"
                  id="exampleFormControlFile1"
                />
              </div>
              <div className="form-group my-2">
                <label forhtml="description" className="my-2">
                  Descripción
                </label>
                <CKEditor
                  editor={ClassicEditor}
                  data="Escribe aqui la descripción.."
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setDescription(data)
                    console.log(description,"descri")
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
