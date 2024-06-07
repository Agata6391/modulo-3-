import React,{useState} from "react";

function AddTodo({addTodo}){
    const [inputValue,setInputValue] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (inputValue.trim()){
            addTodo(inputValue);
            setInputValue('');
        }    
    };
    return(
        <form className="add-todo-form" onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                placeholder="Agregar una Tarea"
                className="add-todo"
                />
                <button type="summit"
                className="add-todo-button">Agregar</button>
        
        </form>
    )
}

export default AddTodo;