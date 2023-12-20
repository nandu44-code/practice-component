import React from 'react';
import './practice.css';

function Practice(props) {
    return (
        <div className="container">

            <div className='user-name'>
                <h1>{props.name}</h1>
            </div>
            <div className='user-email'>
                <p>Email:{props.email}</p>
            </div>
        </div>
    );
}

export default Practice;
