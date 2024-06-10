import React from 'react';
import Cup from "../assets/Cup.svg";
import cross from "../assets/Plus.svg";
import "../Stylesheets/Cofeecomponent.css";
const Cofeecomponent = () => {
    return ( 
        <div className='ccmain'>
            <div className='cccoffeecontainer'>
                <img src={Cup}/>
            </div>
            <div className='cccross'>
                <img src={cross}/>
            </div>
        </div>
     );
}
 
export default Cofeecomponent;