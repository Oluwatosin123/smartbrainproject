import React from 'react';

const Navigation = ({ onRouteChange }) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={ () => onRouteChange('signin')} className='f3 link dim black pa3 pointer white'>Sign Out</p>
        </nav>
    )
}

export default Navigation;