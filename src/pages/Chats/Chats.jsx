import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Paper, Grid, Divider, TextField, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar, Fab } from "@mui/material";
import Axios from 'axios'
import { getCookie } from "react-use-cookie";
// import socketIOClient from "socket.io-client";

// const ENDPOINT = process.env.REACT_APP_API_KEY; //URL do servidor Socket.IO
// const socket = socketIOClient(ENDPOINT);

const Chats = () => {

    const [chatJanela, setChatJanela] = useState([])
    const [chat, setChat] = useState([])
    const [chatAtivo, setChatAtivo] = useState({})

    const buscarConversas = async () => {
        try {

            const result = await Axios.get(`${process.env.REACT_APP_API_KEY}/janelasEscolhidas`, {
                withCredentials: true,
                headers: { Authorization: `Bearer ${getCookie('token')}` }
            })

            setChatJanela(result.data)

        } catch (error) {
            console.log(error);
        }
    }

    const buscarMensagens = async (whatsapp) => {
        try {

            const result = await Axios.get(`${process.env.REACT_APP_API_KEY}/chat/${whatsapp}`, {
                withCredentials: true,
                headers: { Authorization: `Bearer ${getCookie('token')}` }
            })

            setChat(result.data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        buscarConversas()

        // socket.on("teste", (e) => {
        //     console.log("Conectado ao servidor Socket.IO");
        //     console.log(e);
        //     buscarConversas()
        //     buscarMensagens(chatAtivo.whatsapp)
        //     // const som = new Audio('notificacao.mp3')
        //     // som.play()
        // });

    }, [])

    return (
        <>
            <Header></Header>
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant="h5" className="header-message">Chat</Typography>
                </Grid>
            </Grid>
            <Grid container component={Paper} style={{ width: '100%', Maxheight: '80vh' }}>
                <Grid item xs={3} style={{ borderRight: '1px solid #e0e0e0', overflowY: 'auto', maxHeight: '80vh' }}>
                    <List>
                        <ListItem button key={chatAtivo.nome}>
                            <ListItemIcon>
                                <Avatar alt={chatAtivo.nome} />
                            </ListItemIcon>
                            <ListItemText primary={chatAtivo.nome}></ListItemText>
                        </ListItem>

                    </List>
                    <Divider />
                    <Grid item xs={12} style={{ padding: '10px' }}>
                        <TextField id="outlined-basic-email" label="Nome, proposta ou whatsapp" variant="outlined" fullWidth />
                    </Grid>
                    <Divider />
                    <List>
                        {
                            chatJanela.map(e => {
                                return (
                                    <ListItem button key={e._id} onClick={() => {
                                        setChatAtivo(e)
                                        buscarMensagens(e.whatsapp)
                                    }}
                                        style={{ backgroundColor: e.visualizado ? 'gray' : 'white' }}
                                    >
                                        <ListItemIcon>
                                            <Avatar alt={e.nome} />
                                        </ListItemIcon>
                                        <ListItemText primary={`${e.nome} - ${e.proposta}`}>{e.nome}</ListItemText>
                                        <ListItemText secondary={e.tipoAssociado} align="right"></ListItemText>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Grid>
                <Grid item xs={5}>
                    <List style={{ height: '70vh', overflowY: 'auto' }}>
                        {
                            chat.map(e => {
                                return (
                                    <ListItem key={e._id} >
                                        <Grid container textAlign={e.de === 'whatsapp:+15674092338' ? 'right' : 'left'}>
                                            <Grid item xs={12} >
                                                <ListItemText primary={e.mensagem} style={{ display: 'inline-block', background: e.de === 'whatsapp:+15674092338' ? 'blue' : 'gray', color: 'white', maxWidth: '80%', padding: '10px', borderRadius: '8px' }}></ListItemText>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <ListItemText secondary={e.horario}></ListItemText>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                )
                            })
                        }

                        {/* <ListItem key="2">
                            <Grid container textAlign='left'>
                                <Grid item xs={12}>
                                    <ListItemText primary="Hey, Iam Good! What about you ?" style={{ display: 'inline-block', background: 'gray', color: 'white', maxWidth: '80%', padding: '10px', borderRadius: '8px' }}></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText secondary="09:31"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="3">
                            <Grid container textAlign='right'>
                                <Grid item xs={12}>
                                    <ListItemText align="right" primary="Cool. i am good, let's catch up!" style={{ display: 'inline-block', background: 'blue', color: 'white', maxWidth: '80%', padding: '10px', borderRadius: '8px' }}></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="10:30"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem> */}
                    </List>
                    <Divider />
                    <Grid container style={{ padding: '20px' }}>
                        <Grid item xs={11}>
                            <TextField id="outlined-basic-email" label="Mensagem" fullWidth />
                        </Grid>
                        <Grid xs={1} align="right">
                            <Fab color="primary" aria-label="add">Enviar</Fab>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
            {/* <Container >
                <Box style={{ display: 'block', overflowY: 'auto', height: '100%' }} border='1px solid black' height='auto' maxHeight='100vh' component={Paper}>
                    <Box p={2} position='fixed' bgcolor='white' width='20%'>
                        Conversas
                        <Box>
                            <TextField size="small" label='Nome, numero ou proposta' />
                        </Box>
                    </Box>
                    <Box mt={10}>
                        {
                            conversas.map(e => {
                                return (
                                    <Box style={{ cursor: 'pointer' }} component={Paper} border='1px solid blue' p={2}>
                                        {e} - Mensagem
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Box>
                <Box width='33%' position='relative'>
                    <Box>
                        Conversa
                    </Box>
                    <Box bgcolor='lightgray' p={1} position='absolute' width='100%' bottom={0} >
                        <form action="" style={{display: 'flex', justifyContent: 'center'}}>
                            <TextField size="small" placeholder="Mensagem" style={{width: '80%'}} />
                            <Button style={{marginLeft: '5px'}} type="submit" variant="contained" size="small">Enviar</Button>
                        </form>
                    </Box>
                </Box>
                <Box bgcolor='yellow' width='33%'>
                    ??
                </Box>
            </Container> */}
        </>
    )
}

export default Chats