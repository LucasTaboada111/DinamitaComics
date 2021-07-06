import Swal from "sweetalert2"

const success = () => {
  Swal.fire({
    icon: "success",
    showConfirmButton: false,
    timer: 1000
  })
}

export default success
