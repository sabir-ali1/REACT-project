import React, { useState } from 'react'
import { useAuth } from '../store/auth'

const Contact = () => {

    const [contact,setContact] = useState({
        username:"",
        email:"",
        message:""
    });

    const [userData,setUserData] = useState(true);
    const {user} = useAuth();


    if(userData && user){
        setContact({
            username: user.username,
            email: user.email,
            message: ""
        });

        setUserData(false)
    }

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setContact({
            ...contact,
            [name]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
   

    return (
        <>
            <div classNameName="container mt-5">
                <img src="https://d4t7t8y8xqo0t.cloudfront.net/resized/1080X400/pages%2F3%2Fimage20170306083306.jpg" alt="" width="100%" />
            </div>


            <div className="container">
                <p className='text-center fw-bold fs-4 mt-5'>Contact us</p>
                <div className="row">
                    <div className='col-12 col-md-6'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">username</label>
                                <input type="username" className="form-control" name='username' value={contact.username} onChange={handleInput} required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" name='email' value={contact.email}   required onChange={handleInput}/>

                            </div>
                           
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name='message' value={contact.message} onChange={handleInput} required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                    <div className='col-12 col-md-6  mt-4'>
                        <img className='ms-2 rounded' src="https://d4t7t8y8xqo0t.cloudfront.net/resized/720X480/restaurant%2F693753%2Frestaurant520240227102512.jpeg" alt="" width="90%"/>
                    </div>
                   
                </div>
            </div>

            <div className="container mt-5">
                <img src="https://d4t7t8y8xqo0t.cloudfront.net/eazymedia/ads/ad20230403100752.jpg" alt="" width="100%"/>
            </div>
        </>
    )
}

export default Contact