import React from "react";
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Chats from "./pages/Chats/Chats";

const AppRoutes = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />
                <Route exact path="/chats" element={
                    <ProtectedRoute>
                        <Chats />
                    </ProtectedRoute>
                } />
            </Routes>
        </AuthProvider>
    )
}

export default AppRoutes