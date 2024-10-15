import { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    if(task.trim()==='')return;
    onAdd(task);
    setTask("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        value={task}
        onChange={handleChange}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
