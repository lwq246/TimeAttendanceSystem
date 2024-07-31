import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <br/><br/><br/>
            <Link to="/sign-in">Login</Link>
            
        </div>
    );
}

export default HomePage;