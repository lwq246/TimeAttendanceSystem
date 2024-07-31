import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './core/AuthProvider';

//Master Layout
import MasterPage from './_layout/_default';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
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
            <form className="form w-100" id="kt_new_password_form" onSubmit={handleSubmit}>
                <div className="text-center mb-10">
                    <h1 className="text-gray-900 fw-bolder mb-3">Setup New Password</h1>
                    <div className="text-gray-500 fw-semibold fs-6">Have you already reset the password ? 
                    <a href="/sign-in" className="link-primary fw-bold"> Sign in</a></div>
                </div>
                <div className="fv-row mb-8" data-kt-password-meter="true">
                    <div className="mb-1">
                        <div className="position-relative mb-3">
                            <input className="form-control bg-transparent" type="password" placeholder="Password" name="password" autocomplete="off" />
                            <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
                                <i className="ki-duotone ki-eye-slash fs-2"></i>
                                <i className="ki-duotone ki-eye fs-2 d-none"></i>
                            </span>
                        </div>
                        <div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                        </div>
                    </div>
                    <div className="text-muted">Use 8 or more characters with a mix of letters, numbers & symbols.</div>
                </div>
                <div className="fv-row mb-8">
                    <input 
                        type="password" 
                        placeholder="Repeat Password" 
                        autoComplete="off" 
                        className="form-control bg-transparent" />
                </div>
                <div className="fv-row mb-8">
                    <label className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="toc" value="1" />
                        <span className="form-check-label fw-semibold text-gray-700 fs-6 ms-1">Accept the 
                        <a href="/" className="ms-1 link-primary">Terms and conditions</a>.</span>
                    </label>
                </div>
                <div className="d-grid mb-10">
                    <button 
                        type="button" 
                        id="kt_new_password_submit" 
                        className="btn btn-primary">

                        <span className="indicator-label">Submit</span>
                        <span className="indicator-progress">Please wait... 
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    </button>
                </div>
            </form>
        </ MasterPage>
    );
}

export default ResetPassword;