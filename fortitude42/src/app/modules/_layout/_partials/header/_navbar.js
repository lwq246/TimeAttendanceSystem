import React from 'react';

const _navbar = () => {

    return (        
        <div className="app-navbar flex-shrink-0">
{/* ================================================== Navbar start here ================================================== */}


            {/* begin::Chat */}
            <div className="app-navbar-item ms-1 ms-md-4">
                {/* begin::Menu wrapper */}
                <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px position-relative" id="kt_drawer_chat_toggle">
                    <i className="ki-duotone ki-message-text-2 fs-2">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                    </i>
                    <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
                </div>
                {/* end::Menu wrapper */}
            </div>
            {/* end::Chat */}


{/* ================================================== Navbar end here ================================================== */}
        </div>
    );
};

export default _navbar;