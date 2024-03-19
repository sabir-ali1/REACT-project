import React, { useState } from 'react';
import products from "../components/Home.json";

const Home = () => {
    // Assuming `products` is an array of objects with each object representing a product
    const [data, setData] = useState(products);

    return (
        <>

            {/* first part start here */}

            <div className="container">
                <p className='mt-3'>Home / Delhi NCR / Best Deals in Delhi NCR</p>
                <div id='orange' className="container text-center text-white  py-5 mb-4">
                    <h1>Delhi NCR Restaurant Deals</h1>
                    <p>Check out our exclusive Restaurant Deals in Delhi NCR</p>
                </div>
            </div>

            {/* first part end  here */}


            {/* second part start here */}

            <div id='card' className="container mt-2">

                {data.map((curElem, index) => (
                    <div className='card' style={{ "width": "12rem", display: "inline-flex", marginLeft: "1.5rem", marginTop: "2rem", justifyContent: "center", }} key={index}>
                        <img src={curElem.img} alt="" />
                        <p className='mt-2 ms-2'>{curElem.discount}</p>
                        <p className='ms-2'>{curElem.resturnat}</p>

                    </div>
                ))}

            </div>


        </>
    );
};

export default Home;
