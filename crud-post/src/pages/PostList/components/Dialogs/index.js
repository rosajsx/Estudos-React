import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

function ConfirmDialog(icon, title){
  mySwal.fire({
    position: 'center',
    icon: icon,
    title: title,
    timer: 1500
  })
}







export default ConfirmDialog;