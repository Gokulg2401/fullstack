// src/utils/toastUtils.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Success Toast
export const showSuccess = (msg = '✅ Added to cart!') => {
  toast.success(msg, {
    position: 'top-right',
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
  });
};

// Error Toast
export const showError = (msg = '❌ Something went wrong!') => {
  toast.error(msg, {
    position: 'top-right',
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
  });
};

// Info Toast (optional)
export const showInfo = (msg = 'ℹ️ Info') => {
  toast.info(msg, {
    position: 'top-right',
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
  });
};
