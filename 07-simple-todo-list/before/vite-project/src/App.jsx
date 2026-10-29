import "./styles.css";
import ListItem from "./components/ListItem";
import { useState } from "react";

function App() {
  const [listItem, setListItem] = useState([]);
  const [todoName, setTodoName] = useState("");

  function handleAddTodo() {
    if (todoName === "") return;

    const newTodoItem = {
      name: todoName,
      completed: false,
      id: crypto.randomUUID(),
    };

    setListItem((prev) => [...prev, newTodoItem]);

    setTodoName("");
  }

  function toggleTodo(id, completed) {
    setListItem((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed } : item)),
    );
  }

  return (
    <>
      <ul id="list">
        {listItem.map((item) => {
          return (
            <ListItem
              key={item.id}
              name={item.name}
              completed={item.completed}
              id={item.id}
              toggleTodo={toggleTodo}
            />
          );
        })}
      </ul>
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          type="text"
          id="todo-input"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
