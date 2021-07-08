import React from "react";
import AlertMessage from "../components/AlertMessage";

function DeleteMember() {
  return (
    <div>
      <button
        button
        type="button"
        class="btn btn-primary"
        onClick={() =>
          AlertMessage("Alerta!", "Esta a punto de eliminar un miembro")
        }
      >
        Eliminar Miembro
      </button>
    </div>
  );
}

export default DeleteMember;
