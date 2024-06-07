import React from "react";
import TodoItem from "./TodoItem";
function TodoList({Todos, removeTodo}){
    return(
        <div className="todo-list">
            {Todos.map(todo =>(
                <TodoList key = {todo.id} todo={todo} removeTodo={removeTodo}></TodoList>
            ))}

        </div>
    );

// map sirve para recorrer un arreglo
}
export default TodoList;