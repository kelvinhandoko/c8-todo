import { useState } from "react"
import TodoForm from "../component/todoForm"




export default function Todos(){
   const [todo, SetTodo] = useState([])
   
   const handleComplete = (id) => {
    let allTodo = todo.map(e => {
        return e.id === Number(id) ? {...e, complete : !e.complete} : {...e}
    })  
    console.log(id)
    SetTodo(allTodo)
   }

   const addTodo = (input) => {
       if(!input) return
       let allData = [...todo,{id:todo.length + 1, task:input, complete:false}]
       SetTodo(allData)
   }

    return (
        <>
        <h1>thing to do</h1>
        <TodoForm add={addTodo}/>
        <ul>
            {todo.map((e,index) => {
                return (
                    <li
                    key={index}
                    className={e.complete ? "stripped" : ""}
                    onClick = {() => handleComplete(e.id)}
                    >
                       {e.task}
                    </li>
                )
            })}
        </ul>
        </>
    )
}