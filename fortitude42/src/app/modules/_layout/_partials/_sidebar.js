import React from 'react';
import Footer from './sidebar/_footer';
import Logo from './sidebar/_logo';
import Menu from './sidebar/menu/_menu';

const _sidebar = () => {

    return (        
        <div 
            className="app-sidebar flex-column"
          
            id="kt_app_sidebar"
            data-kt-drawer="true"
            data-kt-drawer-name="app-sidebar"
            data-kt-drawer-activate="{default: true, lg: false}"
            data-kt-drawer-overlay="true"
            data-kt-drawer-width="225px"
            data-kt-drawer-direction="start"
            data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">

            {/* layout-partial:Sidebar Logo */}
            <Logo />

            {/* layout-partial:Sidebar Menu */}
            <div className='overflow-auto'>
            <Menu />
            </div>
           
            <div className='mt-auto'>
            {/* layout-partial:Sidebar Footer */}
            <Footer />
            </div>
            
        </div>
    );
};

export default _sidebar;