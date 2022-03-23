import { useState } from "react"
import data from "../data/data.json"



export default function Todos(){
    const [todo, setTodo] = useState(data)
   
    return (
        <>
        <h1>ini dari todo</h1>
        </>
    )
}