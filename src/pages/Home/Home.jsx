import React from 'react'
import Axios from 'axios'
import Header from '../../components/Header/Header'
import config from '../../config/axiosHeader'
import { Container } from '@mui/material'

const Home = () => {

    return (
        <>
            <Header />
            <div style={{marginTop: '80px'}}>
                <Container>
                    Home
                </Container>
            </div>
        </>
    )
}

export default Home