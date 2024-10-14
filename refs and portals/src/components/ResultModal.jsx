import { forwardRef, useImperativeHandle, useRef } from "react";
const ResultModal = forwardRef(({ result, targetTime }, ref) => {
  //here why do we use useImperativeHandle because differnt dev's may be working with 
  // different components so it is not ideal to expect a dialog always and to use the .open() or .close() from a
  // different component, instead we expose our own methods
  const dialog = useRef();
  useImperativeHandle(ref, ()=> {
    return {
       open : () => {
        dialog.current.showModal();
       }
    }
  }) 
  return (
    <dialog ref={dialog} className="result-modal">
      {/* Backdrop does not work by default if we force open the dialog, so we programatically open it */}
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
