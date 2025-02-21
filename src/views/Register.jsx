import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register({ flashMessage }) {

    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        // console.log(event);
        let password = event.target.password.value;
        let confirmPass = event.target.confirmPass.value;
        if (password !== confirmPass){
            flashMessage('Passwords do not match', 'warning');
        } else{
            // Make the Post Request to Flask API
            console.log('Passwords do match! Hooray!!')

            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            let formData = JSON.stringify({
                // first_name: event.target.firstName.value,
                // last_name: event.target.lastName.value,
                email: event.target.email.value,
                username: event.target.username.value,
                password: event.target.password.value
            })

            fetch('https://kekambas-blog-api.onrender.com/api/users', {
                method: 'POST',
                headers: myHeaders,
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error){
                        flashMessage(data.error, 'danger');
                    } else {
                        flashMessage(`${data.username} has been created`, 'success');
                        navigate('/');
                    }
                })
        }
    }

    return (
        <>
            <h3 className="text-center">Sign Up Here!</h3>
            <form action="" onSubmit={handleRegister}>
                <div className="form-group">
                    <input type="text" name="firstName" className="form-control my-3" placeholder='Enter First Name' />
                    <input type="text" name="lastName" className="form-control my-3" placeholder='Enter Last Name' />
                    <input type="text" name="email" className="form-control my-3" placeholder='Enter Email' />
                    <input type="text" name="username" className="form-control my-3" placeholder='Enter Username' />
                    <input type="password" name="password" className="form-control my-3" placeholder='Enter Password' />
                    <input type="password" name="confirmPass" className="form-control my-3" placeholder='Confirm Password' />
                    <input type="submit" value="Sign Up" className='btn btn-success w-100' />
                </div>
            </form>
        </>
    )
}
