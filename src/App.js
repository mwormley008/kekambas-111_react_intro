import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ButtonDisplay from './views/ButtonDisplay';
import RacerDisplay from './views/RacerDisplay';
import Home from './views/Home';

function App() {
    let name = 'Brian';

    return (
        <div className="App">
            <Navbar username={name} city={"Chicago"}/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} /> 
                    <Route path='/buttons' element={<ButtonDisplay name={name} />} />
                    <Route path='/racers' element={<RacerDisplay />} />
                </Routes>
                
            </div>
        </div>
    );
}

export default App;
