import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css'

export const copyAlert = ()=>{
    Swal.fire({
        position: "bottom",
        text: "Copied to clipboard",
        showConfirmButton: false,
        timer: 700,
        background: '#000',
        color: '#fff',
        width: 'fit-content',
        
        
    });
}