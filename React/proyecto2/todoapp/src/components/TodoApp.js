import React,{useState} from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";


function TodoApp(){
const [todos , setTodos]=useState([]);
const addTodo=(text)=>{
    setTodos([...todos,{text, id:Date.now()}])// los 3 ... es descomponetizacion  es decir va leer el txt y el Id de cada elemento 
};//usamos el Id:Date.now para colocar un ID unico ya que se acumular en Seg,miliseg
const removeTodo = (id)=>{ 
    setTodos(todos.filter(todo =>todo.id !== id))

};
return(
    <div className="todo-app">
        <h1>My ToDo APP</h1>
        <AddTodo addTodo={addTodo}/>
        <TodoList todos = {todos} removeTodo={removeTodo}/>

    </div>
);
}
export default TodoApp;
       