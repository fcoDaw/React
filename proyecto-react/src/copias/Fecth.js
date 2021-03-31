import React, { Component } from 'react';
import './App.css';
import FormularioSimple from './components/FormularioSimple'


class App extends Component{
    constructor(){
        super()
        //GET, POST, PUT, PATCH, DELETE --> librería Fecth
        /*fetch('https://jsonplaceholder.typicode.com/users')
            .then(x => x.json())
            .then(x => console.log(x))
        */

        // POST
        fetch('https://jsonplaceholder.typicode.com/users',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name:'Nicolas Hidalgo',
                username:'mash',
            })
        }).then(x => x.json())
        .then(x => console.log(x))
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