import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './core/AuthProvider';

//Master Layout
import MasterPage from './_layout/_default';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            await login(email, password);
            navigate('/dashboard');

        } catch (error) {
            console.error('Login error:', error);
            // Handle login errors (e.g., display error message)

        }
    };


    return (
        <MasterPage>
            <form className="form w-100" id="kt_sign_in_form" onSubmit={handleLogin}>
                <div className="text-center mb-11">
                    <h1 className="text-gray-900 fw-bolder mb-3">Sign In</h1>
                    <div className="text-gray-500 fw-semibold fs-6">Your Productivity Potential</div>
                </div>
                <div className="row g-3 mb-9">
                    <div className="col-md-6">
                        <a href="/" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                        <img alt="Logo" src="static/media/svg/brand-logos/google-icon.svg" className="h-15px me-3" />Sign in with Google</a>
                    </div>
                    <div className="col-md-6">
                        <a href="/" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                        <img alt="Logo" src="static/media/svg/brand-logos/apple-black.svg" className="theme-light-show h-15px me-3" />
                        {/* <img alt="Logo" src="static/media/svg/brand-logos/apple-black-dark.svg" className="theme-dark-show h-15px me-3" /> */}Sign in with Apple</a>
                    </div>
                </div>
                <div className="separator separator-content my-14">
                    <span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
                </div>
                <div className="fv-row mb-8">
                    <input 
                    type="text" 
                    placeholder="Email" 
                    autoComplete="off" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control bg-transparent" />
                </div>
                <div className="fv-row mb-3">
                    <input 
                    type="password" 
                    placeholder="Password" 
                    autoComplete="off" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control bg-transparent" />
                </div>
                <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                    <div></div>
                    <a href="/forgot-password" className="link-primary">Forgot Password ?</a>
                </div>
                <div className="d-grid mb-10">
                    <button 
                    type="submit" 
                    id="kt_sign_in_submit" 
                    className="btn btn-primary">

                        <span className="indicator-label">Sign In</span>
                        <span className="indicator-progress">Please wait... 
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    </button>
                </div>
                <div className="text-gray-500 text-center fw-semibold fs-6">Not a Member yet? 
                <a href="/sign-up" className="link-primary"> Sign up</a></div>        
            </form>   
        </ MasterPage>
    );
}

export default SignIn;