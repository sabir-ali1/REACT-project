import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Register = () => {

    const [user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });

    const navigate = useNavigate();
    const {storeTokenInLs} = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/register",{
                method:"POST",
               headers:{
                "Content-Type":"application/json"
               },
               body:JSON.stringify(user)
            });

            console.log(response);

           if(response.ok){
            const res_data = await response.json();
            storeTokenInLs(res_data.token)
            setUser({username:"",email:"",phone:"",password:""});
            alert("register successfull");
            navigate("/login");
            }
        } catch (error) {
            console.log("error from register page",error);
        }
    }

    return (
        <>
            <div className="container mt-5">
                <p className='fs-4 fw-bold'>Register here</p>
                <div className="row mt-5">
                    <div className='col-12 col-md-6'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">username</label>
                                <input type="username" className="form-control" name='username' value={user.username} onChange={handleInput} required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" name='email' value={user.email} onChange={handleInput} required/>
                            </div>
                             <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="number" className="form-control" name='phone' value={user.phone} onChange={handleInput} required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={user.password} onChange={handleInput} required/>
                            </div>
                            <p>you have account? <Link to="/login">Login here</Link> </p>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className='col-12 col-md-6'>
                    <img className='rounded' src="https://d4t7t8y8xqo0t.cloudfront.net/resized/720X480/restaurant%2F693753%2Frestaurant720240227102512.jpeg" alt="" width="90%"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register