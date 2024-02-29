import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <>
      <div className="colorPickerContainer">
        <h1>Color Picker</h1>
        <div style={{ backgroundColor: color }} className="colorDisplay">
          <p>Selected color: {color}</p>
        </div>
        <label>Select a Color: </label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </>
  );
}

export default ColorPicker;
