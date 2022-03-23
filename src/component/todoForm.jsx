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
            <input 
            type="text"
            name="todo"
            placeholder="add your new task"
            value={input}
            onChange={handleChange}
            />
            <button>add todo</button>
        </form>
        </>
    )
}
