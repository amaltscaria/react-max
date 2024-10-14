import { forwardRef, useImperativeHandle, useRef } from "react";
import {createPortal} from 'react-dom';
const ResultModal = forwardRef(
  ({ targetTime, remainingTime, onReset }, ref) => {
    //here why do we use useImperativeHandle because differnt dev's may be working with
    // different components so it is not ideal to expect a dialog always and to use the .open() or .close() from a
    // different component, instead we expose our own methods
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open: () => {
          dialog.current.showModal();
        },
      };
    });
    return createPortal(
      <dialog ref={dialog} className="result-modal" onClose={onReset}>
        {/* Backdrop does not work by default if we force open the dialog, so we programatically open it */}
        {userLost && <h2>You Lost!</h2>}
        {!userLost && <h2>Your Score: {score}</h2>}
        <p>
          The target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer with{" "}
          <strong>{formattedRemainingTime} seconds left.</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>,
       document.getElementById('modal')
    );
  }
);

export default ResultModal;
