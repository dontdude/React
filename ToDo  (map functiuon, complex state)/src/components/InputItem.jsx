import React from "react";

function Input(props) {
  return (
    <div className="form">
      <input
        onChange={props.inputChange}
        type="text"
        value={props.inputValue}
      />
      <button onClick={props.addInput}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
