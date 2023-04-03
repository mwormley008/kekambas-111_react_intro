import React, { useState } from 'react';

export default function Button({ color, step }) {
    console.log('Rendering!');

    let [count, setCount] = useState(0);
    
    function handleClick(event){
        console.log('Button clicked:', count, step)
        setCount(count + step);
    };

    return (
        <button className={`btn btn-${color}`} onClick={handleClick}>+{step} -- {count}</button>
    );
};
