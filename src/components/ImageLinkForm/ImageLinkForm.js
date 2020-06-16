import React from 'react';

//it is a simple component with no state

const ImageLinkForm =({ onInputChange, onButtonSubmit }) => {
    return(
        <div>
            <div>
                <p className='f3'>
                    {'This magic Brain will detect faces in your pictures. Give it a try'}
                </p>
            </div>
            <div>
                <input type='text' className='f3 w-25 link ph3 pv2 dib bg-dark-red' onChange={onInputChange}/>
                <button className='f3 bg-blue grow' onClick={onButtonSubmit} >Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;