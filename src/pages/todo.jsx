
import { useState } from "react";
import TodoForm from "../component/todoForm";
import TodoList from "../component/todoList";

export default function Todos() {
  const [todo, SetTodo] = useState([]);
  
  const handleComplete = (id) => {
    let allTodo = todo.map((e) => {
      return e.id === Number(id) ? { ...e, complete: !e.complete } : { ...e };
    });
    SetTodo(allTodo);
  };

  const addTodo = (input) => {
    if (!input) return;
    let allData = [
      ...todo,
      { id: todo.length + 1, task: input, complete: false },
    ];
    SetTodo(allData);
  };

  const deleteTodo = (id) => {
    let delArr = todo.splice(id,1);
    SetTodo(delArr);
  };

  const updateTodo = (id, value) => {
    if(!value) return
    SetTodo(e => e.map(item => item.id === id ? value : item))
  }
 
  return (
    <>
      <div className="todo">
        <h1 className="todo-title">thing to do</h1>
        <TodoForm add={addTodo} />
        <TodoList 
        todo={todo}
        complete={handleComplete}
        remove={deleteTodo}
        update={updateTodo}
        />
      </div>
    </>
  );
}
