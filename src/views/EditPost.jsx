import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


export default function EditPost({ loggedIn, flashMessage }) {

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (!loggedIn){
            flashMessage('You must be logged in to edit a post', 'danger');
            navigate('/login');
        }
    })

    async function handleSubmit(e){
        e.preventDefault();

        // Get the data from the form
        // let title = e.target.title.value;
        let title = e.target.title.value;
        let content = e.target.body.value;

        // Get the token from localStorage
        let token = localStorage.getItem('token');

        // Set up the request headers
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization', `Bearer ${token}`);

        // Set up the request body
        let requestBody = JSON.stringify({ title, content })

        // Make the fetch request
        let response = await fetch(`https://kekambas-blog-api.onrender.com/api/posts/${params.postId}`, {
            method: 'PUT',
            headers: myHeaders,
            body: requestBody
        });

        let data = await response.json();

        if (data.error){
            flashMessage(data.error, 'danger');
        } else {
            flashMessage(`${data.title} has been edited`, 'primary');
            navigate('/');
        };
    };

    return (
        <>
            <h3 className="text-center">Edit this Post</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="title" className="form-control my-3" placeholder='Enter Title' />
                    <textarea name="body" className="form-control my-3" placeholder='Enter Body' />
                    <input type="submit" value="Edit Post" className='btn btn-success w-100' />
                </div>
            </form>
        </>
    )
}
