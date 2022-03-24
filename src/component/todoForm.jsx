import { Button, TextField } from "@mui/material"
import { useState } from "react"

export default function TodoForm(props){
    const{add} = props
    const [input, setInput] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        add(input)
        setInput("")
    }
    const handleChange = e => setInput(e.target.value)

    return (
        <>
        <form onSubmit={handleSubmit}>
            <TextField
            id="standard-search"
            label="add your new task"
            type="text"
            variant="standard" 
            name="todo" 
            value={input} 
            onChange={handleChange} 
            />
            <Button 
                variant="outlined" 
                style={{margin:"10px"}}   
                type="submit">add todo</Button
            >
        </form>
        </>
    )
}
