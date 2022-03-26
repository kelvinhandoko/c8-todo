import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";
import TodoForm from "./todoForm";

export default function TodoList(props) {
  const { todo, complete, update, remove } = props;
  
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const handleUpdate = (value) => {
    update(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  return (
  edit.id ? (
    <TodoForm edit={edit} onSubmit={handleUpdate} />
  ) : (
    <ul>
      {todo.map((e, index) => {
        return (
          <div
            className={e.complete ? "todo-list-completed" : "todo-list"}
            onClick={() => complete(e.id)}
            key={index}
          >
            <li className="todo-row">{e.task}</li>
            <div className="icon">
              <Delete
                style={{ marginRight: "10px" }}
                onClick={() => remove(index)}
              />
              <Edit onClick={() => setEdit({id: e.id, value: e.task})} />
            </div>
          </div>
        );
      })}
    </ul>
  )
  )
  
}
