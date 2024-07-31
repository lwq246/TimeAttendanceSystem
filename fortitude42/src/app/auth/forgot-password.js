import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './core/AuthProvider';

//Master Layout
import MasterPage from './_layout/_default';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const { login } = useAuth();
    const navigate = useNavigate();

    const handleReset = async (e) => {
        e.preventDefault();

        try {
            //await login(email, password);
            //navigate('/dashboard');

        } catch (error) {
            console.error('Login error:', error);
            // Handle login errors (e.g., display error message)

        }
    };


    return (
        <MasterPage>
            <form className="form w-100" id="kt_password_reset_form" onSubmit={handleReset}>            
                <div className="text-gray-500 mb-10 fw-semibold fs-6">&larr; back to 
                    <a href="/sign-in" className="link-primary"> Sign In</a></div>  
                <div className="text-center mb-10">
                    <h1 className="text-gray-900 fw-bolder mb-3">Trouble with signing in?</h1>
                    <div className="text-gray-500 fw-semibold fs-6">Enter your email address and we'll send you a link to get back into your account.</div>
                </div>
                <div className="fv-row mb-8">
                    <input 
                        type="text" 
                        placeholder="Email" 
                        autoComplete="off" 
                        className="form-control bg-transparent" />
                </div>
                <div className="d-flex flex-wrap justify-content-center pb-lg-0">
                    <button 
                        type="button" 
                        id="kt_password_reset_submit" 
                        className="btn btn-primary me-4">
                        
                        <span className="indicator-label">Send Link</span>
                        <span className="indicator-progress">Please wait... 
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    </button>
                </div>
                    
                <div className="separator separator-content my-14">
                    <span className="w-125px text-gray-500 fw-semibold fs-7">Or</span>
                </div>
                <div className="text-gray-500 text-center fw-semibold fs-6"> 
                <a href="/sign-up" className="link-primary">Create New Account</a></div>  
            </form>
        </ MasterPage>
    );
}

export default ForgetPassword;