import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifyInfo = (message, toastId) => {
    toast.info(message, {
      autoClose: 2000,
      toastId: toastId,
      theme: "colored"
    });
}

export const notifyError = (message, toastId) => {
    toast.error(message, {
      autoClose: 2000,
      toastId: toastId,
      theme: "colored"
    });
}
  
  export const notifySuccess = (message, toastId) => {
    toast.success(message, {
      autoClose: 2000,
      toastId: toastId,
      theme: "colored"
    });
}