import Swal from "sweetalert2"

const warning = () => {
  Swal.fire({
    icon: "warning",
    text: "Please, insert something.",
    timer: 1300
  })
}

export default warning
