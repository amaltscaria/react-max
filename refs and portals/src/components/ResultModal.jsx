const ResultModal = ({ result, targetTime }) => {
  return (
    <dialog>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form></form>
    </dialog>
  );
};

export default ResultModal;
