import { Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function TodoForm(props) {
  const { add, edit } = props;
  const [input, setInput] = useState(edit ? edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    add(input);
    setInput("");
  };
  const handleChange = (e) => setInput(e.target.value);

  return (
    <>
      <form onSubmit={handleSubmit}>
        {edit ? (
          <>
            <TextField
              id="standard-search"
              label="edit your task"
              type="text"
              variant="standard"
              name="todo"
              value={input}
              ref={inputRef}
              onChange={handleChange}
            />
            <Button variant="outlined" style={{ margin: "10px" }} type="submit">
              update
            </Button>
          </>
        ) : (
          <>
            <TextField
              id="standard-search"
              label="add your new task"
              type="text"
              variant="standard"
              name="todo"
              ref={inputRef}
              value={input}
              onChange={handleChange}
            />
            <Button variant="outlined" style={{ margin: "10px" }} type="submit">
              add todo
            </Button>
          </>
        )}
      </form>
    </>
  );
}
