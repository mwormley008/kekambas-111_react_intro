import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ username, city, loggedIn, logUserOut }) {
    // console.log(props);
    // console.log(typeof props);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        {loggedIn ? (
                            <>
                            <Link className="nav-link" to="/create">Create A Post</Link>
                            <Link className="nav-link" to="/" onClick={() => logUserOut()}>Log Out</Link>
                            </>
                        ) : (
                            <>
                            <Link className="nav-link" to="/register">Sign Up</Link>
                            <Link className="nav-link" to="/login">Log In</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
