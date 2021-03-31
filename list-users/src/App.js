import React from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from 'wouter'


function App()  {

  return (
    <div className="App">
      <section className ="App-content">
      <h1>App</h1>

        <Link to='/gif/programming'>gifs de hacker</Link>
        <Link to='/gif/deportes'>Gifs de deportes</Link>
        <Link to='/gif/panda'>Gifs de pandas</Link>
       <Route path='/gif/:keyword'  component= {ListOfGifs}/> 
      
      </section>
    </div>
  );
}


export default App;
