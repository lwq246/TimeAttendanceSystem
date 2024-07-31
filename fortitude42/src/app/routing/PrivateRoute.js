import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './../../app/auth/core/AuthProvider'; 

const PrivateRoute = ({ element: Element, ...rest }) => {
    const { isAuthenticated, refreshAccessToken } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAccessToken = async () => {
            try {
                await refreshAccessToken();

            } catch (error) {
                console.error('Error refreshing access token:', error);

            } finally {
                setLoading(false);
                
            }
        };
        checkAccessToken();
    }, [refreshAccessToken]);

    if (loading) {
        return; //<div>Loading...</div>;
    }

    return isAuthenticated ? <Element {...rest} /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;