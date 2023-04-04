import React from 'react';
import Navbar from './components/Navbar';
// import { Route } from 'react-router-dom';
import ButtonDisplay from './views/ButtonDisplay';

function App() {
    let name = 'Brian';

    return (
        <div className="App">
            <Navbar username={name} city={"Chicago"}/>
            <div className='container'>
                <ButtonDisplay name={name} />
            </div>
        </div>
    );
}

export default App;
