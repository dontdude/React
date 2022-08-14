import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Input from "./InputItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(Item) {
    setItems((prevItems) => {
      return prevItems.filter((item) => {
        return item != Item;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input
        inputChange={handleChange}
        addInput={addItem}
        inputValue={inputText}
      />
      <div>
        <ul>
          {items.map((todoItem) => (
            <TodoItem itemClick={deleteItem} text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
