import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const Modal = ({ children, open, className = "",...props }) => {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog className={`modal ${className}`} ref={dialog} {...props}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
