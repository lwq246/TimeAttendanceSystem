import React from 'react';

const _menu = () => {

    return (  
        <div 
        className="app-header-menu app-header-mobile-drawer align-items-stretch" 
            data-kt-drawer="true" 
            data-kt-drawer-name="app-header-menu" 
            data-kt-drawer-activate="{default: true, lg: false}" 
            data-kt-drawer-overlay="true" 
            data-kt-drawer-width="250px" 
            data-kt-drawer-direction="end" 
            data-kt-drawer-toggle="#kt_app_header_menu_toggle" 
            data-kt-swapper="true" 
            data-kt-swapper-mode="{default: 'append', lg: 'prepend'}" 
            data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}">
        
            <div className="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0" id="kt_app_header_menu" data-kt-menu="true">
{/* ================================================== Menu Wrapper start here ================================================== */}

        
                {/* begin:Menu item */}
                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
                    {/* begin:Menu link */}
                    <span className="menu-link">
                        <span className="menu-title">Help</span>
                        <span className="menu-arrow d-lg-none"></span>
                    </span>
                    {/* end:Menu link */}
                    {/* begin:Menu sub */}
                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
                        {/* begin:Menu item */}
                        <div className="menu-item">
                            {/* begin:Menu link */}
                            <a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="_blank" title="Check out over 200 in-house components, plugins and ready for use solutions" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-rocket fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Components</span>
                            </a>
                            {/* end:Menu link */}
                        </div>
                        {/* end:Menu item */}
                        {/* begin:Menu item */}
                        <div className="menu-item">
                            {/* begin:Menu link */}
                            <a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-abstract-26 fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Documentation</span>
                            </a>
                            {/* end:Menu link */}
                        </div>
                        {/* end:Menu item */}
                        {/* begin:Menu item */}
                        <div className="menu-item">
                            {/* begin:Menu link */}
                            <a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="_blank">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-code fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                        <span className="path4"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Changelog v8.2.3</span>
                            </a>
                            {/* end:Menu link */}
                        </div>
                        {/* end:Menu item */}
                    </div>
                    {/* end:Menu sub */}
                </div>
                {/* end:Menu item */}




































{/* ================================================== Menu Wrapper end here ================================================== */}
            </div>	
        </div>						
    );
};

export default _menu;