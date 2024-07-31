import React from 'react';
import { useAuth } from './../../../app/auth/core/AuthProvider'; 

const ProfilePage = () => {
    const { logout } = useAuth();

    return (
        <div>
            <h2>ProfilePage</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default ProfilePage;