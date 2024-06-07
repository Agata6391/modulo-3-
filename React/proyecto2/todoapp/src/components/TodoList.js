import React from "react";
import TodoItem from "./TodoItem";

function TodoList({todos, removeTodo}){
    return(
        <div className="todo-list">
            {todos.map(todo =>(
                <TodoItem key = {todo.id} todo={todo} removeTodo={removeTodo}/>
            ))}

        </div>
    );

// map sirve para recorrer un arreglo
}
export default TodoList;