import React from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';

function App() {
    let random = Math.floor((Math.random()*100));
    let name = 'Brian';
    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000}
    ];

    return (
        <div className="App">
            <Navbar username={name} city={"Chicago"}/>
            <div className='container'>
            {random > 50 ? <h1>Hello {name} {random}</h1> : <h1>Good Bye {name} {random}</h1>}
            {buttons.map(button => <Button key={button.step} color={button.color} step={button.step}/> )}
            </div>
        </div>
    );
}

export default App;
