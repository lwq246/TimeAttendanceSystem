import React from 'react';
import { useAuth } from './../../../app/auth/core/AuthProvider'; 

const TestPage = () => {
    const { logout } = useAuth();

    return (
        <div>
            <h2>TestPage</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default TestPage;