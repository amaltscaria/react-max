const TabButton = (props) => {
    const handleClick = () => {
        alert('hello Amal T Scaria')
    }
  return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
};

export default TabButton;
