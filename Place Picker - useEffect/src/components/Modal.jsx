import { useEffect } from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

//let's switch to useEffect

// const Modal = forwardRef(function Modal({ children }, ref) {
const Modal = function Modal({ children, open, onClose }) {
  const dialog = useRef();

  // useImperativeHandle(ref, () => {
  //   return {
  //     open: () => {
  //       dialog.current.showModal();
  //     },
  //     close: () => {
  //       dialog.current.close();
  //     },
  //   };
  // });
  useEffect(() => {
    // useEffect synchronizes with dom API
    // becasue in the first render the ref will be connected to
    // dialog only after it is renderd, so without useEffect if we go direct
    // it will be undefined => dialog = useRef()
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open && children}
    </dialog>,
    document.getElementById("modal")
  );
  // });
};

export default Modal;
