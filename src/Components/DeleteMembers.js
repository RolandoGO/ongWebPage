import React from "react";

function DeleteMembers() {
  const showAlert = () => {
    alert("Esta a punto de eliminar un miembro");
  };
  return (
    <div>
      <button
        button
        type="button"
        class="btn btn-primary"
        onClick={() => showAlert()}
      >
        Eliminar Miembro
      </button>
    </div>
  );
}

export default DeleteMembers;
