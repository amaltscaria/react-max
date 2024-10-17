import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  // here we can't directly use setTimeout because the this component is always rendered,
  // so timer will be set when the app is rendered.
  // we can conditionally render this component, only when the modal is open the timer will be set

  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      clearInterval(timer);
    };
  }, [onConfirm]);
  // issue with using function as dependency =>
  // functions though same content  will be treated as differen between render cycles (like objects)
  // const a = {name:'Amal'} != const b = {name: 'Amal'}
  // so we will end up with an infinite loop

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar TIMER={TIMER}></ProgressBar>
    </div>
  );
}
