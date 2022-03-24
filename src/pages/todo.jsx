import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";
import TodoForm from "../component/todoForm";

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
    console.log(todo)
  };

 
  return (
    <>
      <div className="todo">
        <h1 className="todo-title">thing to do</h1>
        <TodoForm add={addTodo} />
        <ul>
          {todo.map((e, index) => {
            return (
              <div
                className={e.complete ? "todo-list-completed" : "todo-list"}
                onClick={() => handleComplete(e.id)}
                key={index}
              >
                <li className="todo-row">
                  {e.task}
                </li>
                <div className="icon">
                  <Delete
                    style={{ marginRight: "10px" }}
                    onClick={() => deleteTodo(index)}   
                  />
                  <Edit />  
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
