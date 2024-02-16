import React, { useState } from "react";

function TBR() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <>
      <div className="main">
        <h1>ToDo</h1>
        <p>Insert Task</p>
        <textarea
          name=""
          id="inputTask"
          cols="30"
          rows="1"
          value={newTask}
          onChange={handleInputChange}
        ></textarea>
        <button onClick={handleAddTask}>Add</button>
      </div>

      <div className="taskBox">
        {tasks.map((task, index) => (
          <div key={index}>{task}</div>
        ))}
      </div>
    </>
  );
}

export default TBR;
