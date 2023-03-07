import React, { useState } from "react";
import Axios from 'axios'
import { Button, Paper, TextField, CircularProgress, Container, Box, Typography, Alert, AlertTitle } from "@mui/material";
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const logar = async (e) => {
        try {

            e.preventDefault()

            setLoading(true)

            console.log(email, password);

            const result = await Axios.post(`${process.env.REACT_APP_API_KEY}/login`, {
                email,
                password
            }, {
                withCredentials: true
            })

            const cookie = result.data.token

            document.cookie = `token=${cookie}`

            if (result.status === 200) {
                navigate('/')
            }

            setLoading(false)

        } catch (error) {
            console.log(error);
            setError(true)
            setLoading(false)
        }

    }

    return (
        <section style={{ background: '#E7EBF0' }}>
            <Container style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box component={Paper} p={3} display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                    <form action="" onSubmit={logar}>
                        <Typography variant="h3" color='darkblue'>
                            LOGIN TELE
                        </Typography>
                        {
                            loading ? (
                                <CircularProgress style={{ position: 'absolute', left: '48.5%', top: '50%' }} />
                            ) : null
                        }
                        {
                            error ? (
                                <Alert severity="error">
                                    <AlertTitle>Erro</AlertTitle>
                                    Usuário ou senha incorretos
                                </Alert>
                            ) : null
                        }
                        <Box p={2}>
                            <TextField label='E-mail' type='email' onChange={(e) => { setEmail(e.target.value) }} />
                        </Box>
                        <Box p={2}>
                            <TextField label="Senha" type='password' onChange={(e) => { setPassword(e.target.value) }} />
                        </Box>
                        <Box display='flex' justifyContent='center' p={2}>
                            <Button type='submit' variant="contained">Entrar</Button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </section>
    )
}

export default Login