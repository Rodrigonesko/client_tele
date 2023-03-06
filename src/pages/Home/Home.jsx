import React from 'react'
import Axios from 'axios'
import config from '../../config/axiosHeader'

const teste = async () => {

    const result = await Axios.get(`${process.env.REACT_APP_API_KEY}/user`, {
        withCredentials: true,
        headers: config.headers
    })

    console.log(result);
}

const Home = () => {

    teste()

    return (
        <>
            Home
        </>
    )
}

export default Home