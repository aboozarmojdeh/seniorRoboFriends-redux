import React from 'react';


const Scroll=(props)=>{
    
    return(
        <div className='' style={{overflowY:'scroll',border:'3px solid black', height:'800px'}}>
        {props.children}
        </div>
    )  
}

export default Scroll;