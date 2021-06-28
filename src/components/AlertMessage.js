const Swal = require("sweetalert2");

function AlertMessage(type="info", title="", message="") {
  Swal.fire(title, message, type);
}

export default AlertMessage;
