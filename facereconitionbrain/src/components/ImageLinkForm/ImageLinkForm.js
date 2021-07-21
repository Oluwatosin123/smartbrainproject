import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
            <div>
                <p className='f3 white'>
                    {'The Magic Brain detect faces in your pictures. Give it a try.'}
                </p>
                <div className='center'>
                    <div className='form center pa4 br3 shadow-5'>
                        <input className='f4 bn pa2 w-70 center bg-white' type='text' />
                        <button className='f3 bn b w-30 grow link ph3 pv2 dib white bg-hot-pink poiter'>Detect</button>
                    </div>
                </div>
            </div>
    )
}

export default ImageLinkForm;