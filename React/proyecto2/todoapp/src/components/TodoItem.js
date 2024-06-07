import React from "react";
function TodoItem({todo,removeTodo}){

    return(
        <div className="todo-item">
            <span>{todo.text}</span>
            <button onClick ={()=> removeTodo(todo.id)} className="remove-todo-button"> X </button>
        </div>
    );
}
export default TodoItem            