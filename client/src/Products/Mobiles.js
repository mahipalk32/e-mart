
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../App.css"
import img from "../images/Mobiles/1.jpg"

const Mobiles = () => {

    const [mobileProducts, setMobileProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/get-mobile")
            .then((res) => setMobileProducts(res.data))
            .catch((err) => console.log(err))
    }, [])

    console.log(mobileProducts)

    // const firstFiveImages = mobileProducts.slice(0, 5)

    return (
        <>
            <div className="proTitle">
                <h2>Mobiles</h2>
            </div>
            <div className='proSection'>
                {
                    mobileProducts.map((item) => {
                        return (
                            <div className='imgBox'>
                                <Link to='/mobiles'>
                                    <img className='proImage' src={img} alt="" />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Mobiles