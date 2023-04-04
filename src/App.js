import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ButtonDisplay from './views/ButtonDisplay';

function App() {
    let name = 'Brian';

    return (
        <div className="App">
            <Navbar username={name} city={"Chicago"}/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<ButtonDisplay name={name} />} />
                    <Route path='/hello' element={<h1>Hello World</h1>} />
                </Routes>
                
            </div>
        </div>
    );
}

export default App;
