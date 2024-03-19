import React, { useState } from 'react'
import Aboutcrousal from '../components/Aboutcrousal'
import discount from "../components/About.json"

const About = () => {

    const [data, setData] = useState(discount);

    return (
        <>
            <Aboutcrousal />

            <div className="container text-center mt-5">
                <p className='fw-bold fs-5'>Plan</p>
                <p>EazyDiner Prime Membership gives VIP access along with guaranteed 25% or more discount in 2000+ premium restaurants across India and Dubai</p>
            </div>

            <div className="container text-center">
                <div id='card' className="container mt-2">

                    {data.map((curElem, index) => (
                        <div className='card' style={{ "width": "12rem", display: "inline-flex", marginLeft: "1.5rem", marginTop: "2rem", justifyContent: "center", }} key={index}>
                            <span className='mt-2 ms-2'>{curElem.month} Month</span>
                            <del className="text-muted mt-2">₹{curElem.actualprice}</del>
                            <span className='mt-2 ms-2 mb-5 mt-2 fw-bold fs-5'>₹{curElem.discount}</span>


                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}

export default About