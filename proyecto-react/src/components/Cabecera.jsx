import React, {Component} from 'react';
import Img from './Img';
import logo from '../logo.svg';
import P from './P'
import A from './A';


/* Pasamos un css a un style inline

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
  INLINE Style normal
   style={styles.header}
   header:{
        backgroundColor:'#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'calc(10px + 2vmin)',
        color:'white',


    }

 */


const styles ={
/* Inline style dinámico*/ 
    header:({backgroundColor}) =>({
        backgroundColor,
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'calc(10px + 2vmin)',
        color:'white',
    })
}
export default class Cabecera extends Component{
    state = {
        backgroundColor:'#282c34',
    }

    cambiarColorHeader = () => {
        this.setState({backgroundColor:'#cf61fb'})
    }

    manejaClick = () => {
        const { miau, manejaClick } = this.props;
        manejaClick(miau);
    }

    render(){
        const { miau } = this.props;
        const { backgroundColor } = this.state;

        return(
            <header onClick={this.cambiarColorHeader} style={styles.header({backgroundColor})} >
            <Img onClick={this.manejaClick} className = "App-logo" src = {logo} alt= "logo"/>
            <P>
                Edit < code > src / App.js </code> and save to reload. 
            </P> 
            <A href = "https://reactjs.org" target = "_blank" rel = "noopener noreferrer" >
                {miau} 
            </A> 
        </header> 
        )
    }
}