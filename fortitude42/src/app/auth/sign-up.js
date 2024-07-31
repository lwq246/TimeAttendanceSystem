import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from './core/AuthProvider';

//Master Layout
import MasterPage from './_layout/_default';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [strength, setStrength] = useState(0);
    const [agreeTnC, setAgreeTnC] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const newStrength = calculateStrength(password);
        setStrength(newStrength);
    }, [password]);

    
    const handleSignUp = async (e) => {
        e.preventDefault();
        
        if (strength < 4) {
            toast.error("Passwords too weak")
            // Display error message for password too weak
            return;
        }

        if (password !== repeatPassword) {
            toast.error("Passwords do not match")
            // Display error message for password mismatch
            return;
        }

        if (!agreeTnC) {
            toast.error("You must accept to the terms and conditions before proceeding")
            // Display error message for tnc uncheck
            return;
        }

        try {
            const signUpSuccess = await signup(email, password);
            if (signUpSuccess) navigate('/sign-in'); // Redirect to dashboard upon successful sign-up

        } catch (error) {
            console.error('Sign up error:', error);
            // Handle sign-up errors (e.g., display error message)

        }
    };


    const calculateStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        return strength;
    };


    return (
        <MasterPage>
            <form className="form w-100" id="kt_sign_up_form" onSubmit={handleSignUp}>
                <div className="text-center mb-11">
                    <h1 className="text-gray-900 fw-bolder mb-3">Sign Up</h1>
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
                        {/* <img alt="Logo" src="assets/media/svg/brand-logos/apple-black-dark.svg" className="theme-dark-show h-15px me-3" /> */}Sign in with Apple</a>
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
                <div className="fv-row mb-8">
                    <div className="mb-1">
                        <div className="position-relative mb-3">
                            <input 
                                type="password" 
                                placeholder="Password" 
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control bg-transparent"  />
                            <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
                                <i className="ki-duotone ki-eye-slash fs-2"></i>
                                <i className="ki-duotone ki-eye fs-2 d-none"></i>
                            </span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <div className={`flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2 ${strength >= 1 ? 'active' : ''}`}></div>
                            <div className={`flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2 ${strength >= 2 ? 'active' : ''}`}></div>
                            <div className={`flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2 ${strength >= 3 ? 'active' : ''}`}></div>
                            <div className={`flex-grow-1 bg-secondary bg-active-success rounded h-5px ${strength >= 4 ? 'active' : ''}`}></div>
                        </div>
                    </div>
                    <div className="text-muted">Use 8 or more characters with a mix of letters, numbers & symbols.</div>
                </div>
                <div className="fv-row mb-8">
                    <input 
                        type="password" 
                        placeholder="Repeat Password" 
                        autoComplete="off" 
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        className="form-control bg-transparent" />
                </div>
                <div className="fv-row mb-8">
                    <label className="form-check form-check-inline">
                        <input 
                            type="checkbox" 
                            value="1" 
                            checked={agreeTnC}
                            onChange={(e) => setAgreeTnC(e.target.value)}
                            className="form-check-input" />
                        <span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">Accept the 
                        <a href="/" className="ms-1 link-primary">Terms and conditions</a>.</span>
                    </label>
                </div>
                <div className="d-grid mb-10">
                    <button 
                        type="submit" 
                        id="kt_sign_up_submit" 
                        className="btn btn-primary">

                        <span className="indicator-label">Sign up</span>
                        <span className="indicator-progress">Please wait... 
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    </button>
                </div>
                <div className="text-gray-500 text-center fw-semibold fs-6">Already have an Account? 
                <a href="/sign-in" className="link-primary fw-semibold"> Sign in</a></div>
            </form>
        </ MasterPage>
    );
}

export default SignUp;