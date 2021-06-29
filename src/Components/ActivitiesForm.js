import React from "react";

export const ActivitiesForm = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-10 ">
            <form>
              <div class="form-group my-2">
                <label for="name">Nombre</label>
                <input type="name" class="form-control" id="name" />
              </div>
              <div class="form-group my-2">
                <label for="image">Imagen:</label>
                <input
                  type="file"
                  class="form-control-file form-control"
                  id="exampleFormControlFile1"
                />
              </div>
              <div class="form-group my-2">
                <label for="description">Descripción</label>
                <input
                  type="description"
                  class="form-control"
                  id="description"
                />
              </div>
              <div className="text-center">
                <button type="submit" class="btn btn-primary">
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
