import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className="container mt-5 text-center">
                <h1 className='text-danger mt-5 fw-bold'>404  - Page Not Found</h1>
                <Link type="button" class="btn btn-success mt-5" to="/">Back to home</Link>

            </div>

        </>
    )
}

export default Error