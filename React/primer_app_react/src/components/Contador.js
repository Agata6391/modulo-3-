import React,{useState} from "react";
const Contador =() =>{
    const [contador, setContador] = useState(0);
    const incrementar =()=>{
        setContador(contador + 1);
                           
    };
    const incrementarx10 =()=>{
        setContador(contador + 10);
                           
    };
    const decrementar =()=>{
        setContador(contador -1);
    };
    const decrementarx10 =()=>{
        setContador(contador -10);
    };
    const reset =()=>{
        setContador(0);
    };
    return (
        <div>
            <h1>Contador: {contador} </h1>
            <p></p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={incrementarx10}>Incrementar x10</button>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={decrementarx10}>Decrementar x10</button>
            <button onClick={reset}>Reset</button>
        
        </div>
        );

};

export default Contador;