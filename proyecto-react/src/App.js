import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FormularioSimple from './components/FormularioSimple'


class App extends Component{
    constructor(){
        super()
        
        // Metodo GET
        /*axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => console.log(data))*/
        
        // Metodo POST
        axios.post('https://jsonplaceholder.typicode.com/users',{
            name: 'Nicolas Schurmann',
            usernarme: 'Nasch'
        }).then(({data}) => console.log(data))
       
    }
    render(){
        return(
            
    < div className = "App" >
        <FormularioSimple />
    </div>

        )
    }
}

export default App;