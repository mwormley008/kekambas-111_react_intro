import React from 'react'

export default function Navbar({ username, city }) {
    // console.log(props);
    // console.log(typeof props);
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">Welcome {username} from {city}</a>
            </div>
        </nav>
    )
}
