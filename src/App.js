import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AlertMessage from './components/AlertMessage';
import Navbar from './components/Navbar';
import ButtonDisplay from './views/ButtonDisplay';
import Home from './views/Home';
import Login from './views/Login';
import RacerDisplay from './views/RacerDisplay';
import Register from './views/Register';


function App() {
    let name = 'Brian';

    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);

    function flashMessage(message, category){
        setMessage(message);
        setCategory(category);
    };

    return (
        <div className="App">
            <Navbar username={name} city={"Chicago"}/>
            {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null}
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} /> 
                    <Route path='/buttons' element={<ButtonDisplay name={name} />} />
                    <Route path='/racers' element={<RacerDisplay />} />
                    <Route path='/register' element={<Register flashMessage={flashMessage} />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
                
            </div>
        </div>
    );
}

export default App;
