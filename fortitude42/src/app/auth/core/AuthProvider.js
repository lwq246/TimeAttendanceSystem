import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || '');
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken') || '');

    useEffect(() => {
        if (accessToken) setIsAuthenticated(true);
        else setIsAuthenticated(false);        
    }, [accessToken]);



    //#region Sign-Up ==================================================
    const signup = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:90/api/auth/signup', { email, password });
            const { user: newUser } = response.data;
            toast.success('Sign-up successful, please check your email for confirmation' + newUser.email);
            
            return true;

        } catch (error) {
            console.error('Error during sign-up', error);
            toast.error('Sign-up failed: ' + error);
            
            return false;

        }
    };
    //#endregion



    //#region Login ==================================================
    const login = async (email, password) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/Users/login', { email, password });
            const { accessToken, refreshToken } = response.data;

            // Store both tokens securely
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            toast.success('Login successful');

          
            setIsAuthenticated(true);

        } catch (error) {
            console.error('Error during login', error);
            toast.error('Login failed: ' + error);
            setIsAuthenticated(false);

        }
    };
    //#endregion



    //#region Logout ==================================================
    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setAccessToken('');
        setRefreshToken('');
        setIsAuthenticated(false);
    };
    //#endregion



    //#region Refresh AccessToken ==================================================
    const refreshAccessToken = async () => { 
        try {
            if (!accessToken) {
                // Handle case where access token is not present
                return;
            }

            // Check if access token is expired        
            const decodedToken = jwtDecode(accessToken);
            const currentTime = Date.now() / 1000; 

            if (decodedToken.exp > currentTime) {
                // Token is not expired, no need to refresh
                return;
            }

            const response = await axios.post('http://localhost:90/api/auth/refresh-token', { refreshToken });
            const { accessToken: newAccessToken } = response.data;

            // Update access token securely
            localStorage.setItem('accessToken', newAccessToken);
            setAccessToken(newAccessToken);
            
        } catch (error) {
            console.error('Error refreshing access token', error);
            logout(); // Optionally log out the user if refresh fails

        }
    };
    //#endregion


    return (
        <AuthContext.Provider value={{ signup, login, isAuthenticated, logout, refreshAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
  return useContext(AuthContext);
};