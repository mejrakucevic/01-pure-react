import React, { useState } from "react";

function TBR() {
  return (
    <>
      <div className="main">
        <h1>ToDo</h1>
        <p>Insert Task</p>
        <textarea name="" id="inputTask" cols="30" rows="1"></textarea>
        <button>Add</button>
      </div>

      <div className="taskBox">
        <textarea name="" id="taskList" cols="30" rows="10">
          Hello
        </textarea>
      </div>
    </>
  );
}

export default TBR;
