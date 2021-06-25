const Swal = require("sweetalert2");

function AlertMessage(type, message) {
  if (type === "error") {
    Swal.fire("Algo salio mal", message, "error");
  } else if (("", type === "success")) {
    Swal.fire("", message, "success");
  } else if (type === "info") {
    Swal.fire("", message, "info");
  }
}

export default AlertMessage;
