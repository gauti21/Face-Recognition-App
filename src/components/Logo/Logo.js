import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

//it is a simple component with no state

const Logo =() => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 90 }} style={{ height: 120, width: 130 }} >
                <div className="Tilt-inner pa3"><img style={{paddingTop:'5px',height:'55px'}} src="https://img.icons8.com/ios/50/000000/brain.png"/> </div>
            </Tilt>
        </div>
    )
}

export default Logo;