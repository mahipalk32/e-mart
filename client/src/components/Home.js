import React, { useEffect, useState } from "react";
import axios from "axios";
import Mobiles from "../Products/Mobiles";

export default function Home() {

    const [menProducts, setMenProducts] = useState([])
    const [womenProducts, setWomenProducts] = useState([])
    const [kitchenProducts, setKitchenProducts] = useState([])
    
    const [tvProducts, setTvProducts] = useState([])
    const [watchProducts, setWatchProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/get-mens-wear")
        .then((res) => setMenProducts(res.data))
        .catch((err) => console.log(err))

        axios.get("http://localhost:5000/get-women-wear")
        .then((res) => setWatchProducts(res.data))
        .catch((err) => console.log(err))

        axios.get("http://localhost:5000/get-mobile")
        .then((res) => setMenProducts(res.data))
        .catch((err) => console.log(err))

        axios.get("http://localhost:5000/get-kitchen")
        .then((res) => setKitchenProducts(res.data))
        .catch((err) => console.log(err))

        axios.get("http://localhost:5000/get-tv")
        .then((res) => setTvProducts(res.data))
        .catch((err) => console.log(err))

        axios.get("http://localhost:5000/get-watch")
        .then((res) => setWatchProducts(res.data))
        .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <Mobiles />
        </div>
    )
}
