import React from 'react';

//it is a simple component with no state

const Rank =() => {
    return(
        <div>
            <div className="white f3">
                <p>{'Your current rank is'}</p>
            </div>
            <div className="white f1">
                {'#5'}
            </div>
        </div>
    );
}

export default Rank;