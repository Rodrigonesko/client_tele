import React from "react";
import Header from "../../components/Header/Header";
import { Box, Paper, TextField, Button } from "@mui/material";

const conversas = [
    'conversa 1',
    'conversa 2',
    'conversa 3',
    'conversa 4',
    'conversa 5',
    'conversa 6',
    'conversa 7',
    'conversa 8',
    'conversa 9',
    'conversa 10',
    'conversa 2',
    'conversa 2',
    'conversa 2',
    'conversa 2',
    'conversa 2',
    'conversa 2',
    'conversa 2',
    'conversa 2',
    'conversa 2',
    'conversa 2',
    'conversa 2',
]

const Chats = () => {
    return (
        <>
            <Header></Header>
            <Box display='flex' >
                <Box style={{ display: 'block', overflowY: 'auto' }} border='1px solid black' width='20%' height='auto' maxHeight='600px' component={Paper}>
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
            </Box>
        </>
    )
}

export default Chats