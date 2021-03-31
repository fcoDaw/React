import React, { Component } from 'react';
import P from './P';

const validate = values =>{
    const errors = {}

    if(!values.nomGif){
        errors.nomGif = 'Este campo es obligatorio';
    }
    return errors;
}


export default class Buscador extends Component{

    state = {
        errors:{}
    }

    handleChange = ({target}) =>{
        const{name,value} = target;
        this.setState({[name]: value}) //Nos devuelve todos los valores de los inputs
    }

    handleSubmit = e => {
        e.preventDefault();
        const{ errors, ...sinErrors} = this.state;
        const result = validate(sinErrors);

        this.setState({errors:result});
        if(!Object.keys(result).length){
            console.log('Datos enviados', this.state);
            e.target.reset();
        }
    }
    
    render(){
        const { errors } = this.state;
        return(
            <form onSubmit = { this.handleSubmit }>
                <input name="nomGif" onChange={this.handleChange} />
                {errors.nomGif && <P>{errors.nomGif}</P>}
                <input type="submit" value="Enviar" />
            </form>
            
        )
    }
  
}
   



