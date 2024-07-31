import React from 'react';

const _footer = () => {

    return (
        <div className="app-footer" id="kt_app_footer">
            <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                <div className="text-gray-900 order-2 order-md-1">
                    <span className="text-muted fw-semibold me-1">2024&copy;</span>
                    <a href="https://fortitude-42.ddns.net/" target="_blank" className="text-gray-800 text-hover-primary">Fortitude 42</a>
                </div>

                <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                    <li className="menu-item"><a href="/about" target="_blank" className="menu-link px-2">About</a></li>
                    <li className="menu-item"><a href="/support" target="_blank" className="menu-link px-2">Support</a></li>
                </ul>
            </div>
        </div>
    );
};

export default _footer;