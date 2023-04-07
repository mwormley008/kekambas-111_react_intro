import React from 'react'

export default function Login() {

    function handleLogin(event){
        event.preventDefault();
        console.log(event);
    }

    return (
        <>
            <h3 className="text-center">Log In Here!</h3>
            <form action="" onSubmit={handleLogin}>
                <div className="form-group">
                    <input type="text" name="username" className="form-control my-3" placeholder='Enter Username' />
                    <input type="password" name="password" className="form-control my-3" placeholder='Enter Password' />
                    <input type="submit" value="Log In" className='btn btn-success w-100' />
                </div>
            </form>
        </>
    )
}
