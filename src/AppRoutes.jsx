import React from "react";
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

const AppRoutes = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </AuthProvider>
    )
}

export default AppRoutes