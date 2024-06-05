import React,{Component } from 'react';

class LifeCycleDemo extends Component{
    constructor(props) {
        super(props);
        this.state={ count: 0};
        console.log ('constructor: El constructor esta construyendo el componente');
    }
    static getDrivedStateFromProp(nextProps, prevState){
    console.log('getDrivedStateFromProp : se esta derivando el estado de las Props');
    return null;
    }
    componentDidMount(){
        console.log ('ComponenteDidMount: el componente ha sido montado en el DOM');
        return true; // reotna true o false si el componente se debe actualizar o no 
    }
    getSnapshotBeforeUpdate(prevProps,prevState ){
        console.log('getSnapshotBeforeUpdate ; se obtiene un snap shot de la actualidad');
        return null;//retorna un valor para pasarlo a componentDidMount
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('componentDidUpdate: el componente se ha actualizado ');
    }
    componentWillMount(){
        console.log('componentWillMount el componente se va a desmontardel DOM ');
    }
    handleButtonClick= ()=>{
        this.setState({count : this.state.count +1});

    }
    render(){
        console.log('Render : el compoenten se esta renderizando');
        return(
            <div>
                <h1>Ciclo de Vida de un Componente</h1>
                <p>Contador: {this.state.count}</p>
                <button onClick={this.handleButtonClick}>Incrementar</button>
                
            </div>
        );
    }
}
export default LifeCycleDemo;