import React from 'react';
import useBodyAttributes from '../../useBodyAttributes';

const _default = ({ children }) => {
    useBodyAttributes({
        id: 'kt_body',
        class: 'app-blank',
    });
    
    return (
        <div className="d-flex flex-column flex-root" id="kt_app_root">
            <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
                    <div className="d-flex flex-center flex-column flex-lg-row-fluid">
                        <div className="w-lg-500px p-10">

                            {children}{/* <= children(Page Content) ================================================== */}
                            
                        </div>
                    </div>
                    <div className="w-lg-500px d-flex flex-stack px-10 mx-auto">
                        <div className="me-10">
                            <button className="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, 0px">
                                <img data-kt-element="current-lang-flag" className="w-20px h-20px rounded me-3" src="static/media/flags/united-states.svg" alt="" />
                                <span data-kt-element="current-lang-name" className="me-1">English</span>
                                <span className="d-flex flex-center rotate-180">
                                    <i className="ki-duotone ki-down fs-5 text-muted m-0"></i>
                                </span>
                            </button>
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7" data-kt-menu="true" id="kt_auth_lang_menu">
                                <div className="menu-item px-3">
                                    <a href="/" className="menu-link d-flex px-5" data-kt-lang="English">
                                        <span className="symbol symbol-20px me-4">
                                            <img data-kt-element="lang-flag" className="rounded-1" src="static/media/flags/united-states.svg" alt="" />
                                        </span>
                                        <span data-kt-element="lang-name">English</span>
                                    </a>
                                </div>
                                {/* <div className="menu-item px-3">
                                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="Spanish">
                                        <span className="symbol symbol-20px me-4">
                                            <img data-kt-element="lang-flag" className="rounded-1" src="static/media/flags/spain.svg" alt="" />
                                        </span>
                                        <span data-kt-element="lang-name">Spanish</span>
                                    </a>
                                </div>
                                <div className="menu-item px-3">
                                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="German">
                                        <span className="symbol symbol-20px me-4">
                                            <img data-kt-element="lang-flag" className="rounded-1" src="static/media/flags/germany.svg" alt="" />
                                        </span>
                                        <span data-kt-element="lang-name">German</span>
                                    </a>
                                </div>
                                <div className="menu-item px-3">
                                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="Japanese">
                                        <span className="symbol symbol-20px me-4">
                                            <img data-kt-element="lang-flag" className="rounded-1" src="static/media/flags/japan.svg" alt="" />
                                        </span>
                                        <span data-kt-element="lang-name">Japanese</span>
                                    </a>
                                </div>
                                <div className="menu-item px-3">
                                    <a href="#" className="menu-link d-flex px-5" data-kt-lang="French">
                                        <span className="symbol symbol-20px me-4">
                                            <img data-kt-element="lang-flag" className="rounded-1" src="static/media/flags/france.svg" alt="" />
                                        </span>
                                        <span data-kt-element="lang-name">French</span>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                        <div className="d-flex fw-semibold text-primary fs-base gap-5">
                            <a href="/terms" target="_blank">Terms</a>
                            <a href="/pricing/column" target="_blank">Plans</a>
                            <a href="/contact" target="_blank">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style={{backgroundImage: `url('static/media/misc/auth-bg.png')`}}>
                    <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
                        <a href="/" className="mb-0 mb-lg-12">
                            <img alt="Logo" src="static/media/logos/custom-1.png" className="h-60px h-lg-75px" />
                        </a>
                        <img className="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20" src="static/media/misc/auth-screens.png" alt="" />
                        <h1 className="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">Fast, Efficient and Productive</h1>
                        <div className="d-none d-lg-block text-white fs-base text-center">In this kind of post, 
                        <a href="/" className="opacity-75-hover text-warning fw-bold me-1">the blogger</a>introduces a person they’ve interviewed 
                        <br />and provides some background information about 
                        <a href="/" className="opacity-75-hover text-warning fw-bold me-1">the interviewee</a>and their 
                        <br />work following this is a transcript of the interview.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default _default;