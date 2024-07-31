import React from 'react';

const _logo = () => {

    return (
        <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
            <a href="?page=index">
                <img alt="Logo" src="static/media/logos/default-dark.svg" className="h-25px app-sidebar-logo-default"/>
                <img alt="Logo" src="static/media/logos/default-small.svg" className="h-20px app-sidebar-logo-minimize"/>
            </a>

            {/* begin::Minimized sidebar setup: */}
            {/* 
                if (isset($_COOKIE["sidebar_minimize_state"]) && $_COOKIE["sidebar_minimize_state"] === "on") {
                    1. "src/js/layout/sidebar.js" adds "sidebar_minimize_state" cookie value to save the sidebar minimize state.
                    2. Set data-kt-app-sidebar-minimize="on" attribute for body tag.
                    3. Set data-kt-toggle-state="active" attribute to the toggle element with "kt_app_sidebar_toggle" id.
                    4. Add "active" className to to sidebar toggle element with "kt_app_sidebar_toggle" id.
                }
            */}
            
            <div
                className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary h-30px w-30px position-absolute top-50 start-100 translate-middle rotate "
                id="kt_app_sidebar_toggle"
                data-kt-toggle="true"
                data-kt-toggle-state="active"
                data-kt-toggle-target="body"
                data-kt-toggle-name="app-sidebar-minimize">

                <i className="ki-duotone ki-black-left-line fs-3 rotate-180">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>        
            </div>
        </div>
    );
};

export default _logo;