import React,{Component, Fragment} from 'react';
import CounterButton from '../CounterButton/CounterButton';


class Header extends Component {
  
    shouldComponentUpdate(nextProps,nextState){
        return false;
    };

    
    render(){
        console.log('Header')
        return(
            <Fragment>
            <h1 className="f1 app-header-text">Senior Robo Friends</h1>
            <CounterButton />
            </Fragment>
        )
    }
};

export default Header;