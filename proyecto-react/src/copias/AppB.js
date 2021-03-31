/*import Cabecera from './components/Cabecera';
import './App.css';
import React, { Component } from 'react';
import P from './components/P';

class App extends Component {
    state ={
        miau:'bienvenido a miau'
    }
    cambiarTextoDelEstado = () =>{

        this.setState({miau:'Hola Mundo'});
    }
     manejaClick = texto => {
         console.log(texto);
    }

    render(){
    const{ miau } = this.state;

        return ( 
            < div className = "App" >
                <Cabecera miau={miau} manejaClick={this.manejaClick}/>
                <P onClick={this.cambiarTextoDelEstado}>
                    {miau}
                </P>
            
            </div>
        )
    }
}

export default App; */