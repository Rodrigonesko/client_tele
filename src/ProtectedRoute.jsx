import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import AuthContext from "./context/AuthContext";
import Axios from 'axios'

const ProtectedRoute = ({ children }) => {

    const {setAccessLevel, name, setName} = useContext(AuthContext)

    const navigate = useNavigate()

    const verifyToken = async () => {
        try {
            const result = await Axios.get(`${process.env.REACT_APP_API_KEY}/verifyToken`, { withCredentials: true })

            setName(result.data.name)
            setAccessLevel(result.data.accessLevel)

        } catch (error) {
            navigate('/login')
        }

    }

    useEffect(() => {

        verifyToken()

    }, [name])


    return (
        children
    )
}

export default ProtectedRoute