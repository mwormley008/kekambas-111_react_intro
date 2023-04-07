import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CreatePost({ loggedIn, flashMessage }) {

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn){
            flashMessage('You must be logged in to create a new post', 'danger');
            navigate('/login');
        }
    })

    function handleSubmit(e){
        e.preventDefault();
        console.log(e);
    };

    return (
        <>
            <h3 className="text-center">Create A Post!</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="title" className="form-control my-3" placeholder='Enter Title' />
                    <textarea name="body" className="form-control my-3" placeholder='Enter Body' />
                    <input type="submit" value="Create Post" className='btn btn-success w-100' />
                </div>
            </form>
        </>
    )
}
