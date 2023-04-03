import React from 'react';
import Navbar from './components/Navbar';

function App() {
    let random = Math.floor((Math.random()*100));
    let name = 'Brian';
    return (
        <div className="App">
            <Navbar username={name} city={"Chicago"}/>
            <div className='container'>
            {random > 50 ? <h1>Hello {name} {random}</h1> : <h1>Good Bye {name} {random}</h1>}
            
            <h4>Hello again</h4>
            </div>
        </div>
    );
}

export default App;
