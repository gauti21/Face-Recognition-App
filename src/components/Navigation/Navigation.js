import React from 'react';

//it is a simple component with no state

const Navigation =() => {
    return (
        <nav style={{display:'flex', justifyContent:'flex-end'}}>
            <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    )
}

export default Navigation;