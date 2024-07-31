import React, { useEffect, useState } from 'react';
import useBodyAttributes from '../../../useBodyAttributes';
import Navbar from './header/_navbar';
import Menu from './header/menu/_menu';

const _header = () => {
    const [isSticky, setIsSticky] = useState(false);
     
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    useBodyAttributes(
      isSticky
        ? {
            'data-kt-sticky-app-header-minimize': 'on',
            'data-kt-app-header-minimize': 'on',
          }
        : {}
    );

    return ( 
        <div 
            className="app-header" 
            id="kt_app_header"
            data-kt-sticky="true"
            data-kt-sticky-activate="{default: true, lg: true}"
            data-kt-sticky-name="app-header-minimize"
            data-kt-sticky-offset="{default: '200px', lg: '0'}"
            data-kt-sticky-animation="false">

            <div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
                <div className="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2" title="Show sidebar menu">
                    <div className="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
                        <i className="ki-duotone ki-abstract-14 fs-2 fs-md-1">
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </i>
                    </div>
                </div>

                <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                    <a href="?page=index" className="d-lg-none">
                        <img alt="Logo" src="static/media/logos/default-small.svg" className="h-30px"/>
                    </a>
                </div>

                <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
                                    
                    {/* layout-partial:Menu */}
                    <Menu />                     
                     
                    {/* layout-partial:Navbar */}                   
                    <Navbar /> 

                </div>
            </div>
        </div>
    );
};

export default _header;