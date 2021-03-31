import React, {Component} from 'react';


/* .App-link {
  color: #61dafb;
} 
*/

const styles = {
    a:{
        color:'#61dafb',
    }
    
}
export default class A extends Component{
    render(){
        return(
            <a {...this.props} style={styles.a}/>
        )
    }
}