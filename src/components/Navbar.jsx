import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../store/auth'

const Navbar = () => {

    const { isLoggedIn } = useAuth();

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-fixed-top border-bottom">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="https://www.eazydiner.com/images/logo.svg" alt="" width="38%" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto fw-bold fs-5">
                            <li className="nav-item">
                                <Link  id='text' className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link  id='text' className="nav-link active" to="/about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link  id='text' className="nav-link active" to="/contact">Contact</Link>
                            </li>

                            {
                                isLoggedIn ? (<li className="nav-item">
                                    <Link  id='text' className="nav-link active" to="/logout">Logout</Link>
                                </li>) : (<> <li className="nav-item">
                                    <Link  id='text' className="nav-link active" to="login">Login</Link>
                                </li></>)
                            }

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar