import { useState } from "react";
import TodoItem from "./TodoItem";
import "./styles.css";

const TodoList = () => {
  const [todos, setTodo] = useState([
    { title: "exercise", selected: false, id: 0 },
    { title: "laundry", selected: false, id: 1 },
    { title: "dishes", selected: false, id: 2 },
    { title: "study", selected: false, id: 3 }
  ]);

  function todoOnClick(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.selected = !todo.selected;
    setTodo(newTodos);
    console.log(todo);
  }

  function onClickDelete() {
    const newTodos = todos.filter((todo) => todo.selected === false);
    setTodo(newTodos);
  }

  return (
    <div className="TodoisContainer">
      {todos.map((item) => (
        <TodoItem todo={item} key={item.key} onClick={todoOnClick} />
      ))}
      <div onClick={onClickDelete} className="DeleteButton">
        <p>Delete</p>
      </div>
    </div>
  );
};

export default TodoList;
