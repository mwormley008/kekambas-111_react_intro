import React from 'react'

export default function Button({ color, step }) {
    
    function handleClick(event){
        console.log(event);
        alert('Button has been clicked');
    };

    return (
        <button className={`btn btn-${color}`} onClick={handleClick}>+{step}</button>
    );
};
