import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import AuthContext from "./context/AuthContext";
import Axios from 'axios'
import { getCookie } from "react-use-cookie";

const ProtectedRoute = ({ children }) => {

    const { setAccessLevel, name, setName } = useContext(AuthContext)

    const navigate = useNavigate()

    const verifyToken = async () => {

        try {
            const token = document.cookie.split('=')[1]

            if (!token) {
                navigate('/login')
            }

            const result = await Axios.get(`${process.env.REACT_APP_API_KEY}/verifyToken`, {
                withCredentials: true, headers: {
                    authorization: `Bearer ${getCookie('token')}`
                }
            })

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