import React from "react";

function TodoItem(props) {
  return (
    <div
      onClick={() => {
        props.itemClick(props.text);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default TodoItem;
