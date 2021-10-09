import React from "react";

interface HelloClassProps{
    name:string;
    age:number;
    address?:string;
    email: string;
}

interface HelloClassState{
    count: number;
    error:''
}
export class HelloClass extends React.Component<HelloClassProps, HelloClassState> {
    state:HelloClassState={
        count: 0,
        error:''
    }

    increment =(count:number) =>{
        this.setState((previosState)=>({count:previosState.count + count}));
    }

    decrement =(num:number) =>{
        this.setState((previosState)=>({count:previosState.count - num}));
    }

    componentDidMount(){
        //Ejemplos de uso
        //Api call, actualizar el estado con el resultado
        //Agregar un event listner
        //Se actualiza cada vez que recibe parametros nuevos
        console.log('Se agrego componente en el DOM')

    }

    componentDidUpdate(){
        if(this.state.count < 0){
            alert('Count no debe ser negativo')
        }
        console.log('Se actualizo el componente')
    }

    componentWillUnmount(){
        //Eliminar event listener 
        console.log('Componente se va a Eliminar')

    }

    render(){
        const {name, age, address ='no address', email} = this.props;
        return <div>
             <ul>
            <li>Name: {name}</li>
            <li>Edad: {age}</li>
            <li>Address: {address}</li>
            <li>Email: {email}</li>
        </ul>
        <p> Count: {this.state.count}</p>
        <p>{this.state.error}</p>
        <button onClick={()=> this.increment(1)}>Increment</button>
        <button onClick={()=> this.decrement(2)}>Decrement</button>
        </div>

        
    }
    
}