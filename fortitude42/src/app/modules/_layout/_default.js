import React from 'react';
import useBodyAttributes from '../../useBodyAttributes';
import Header from './_partials/_header';
import Footer from './_partials/_footer';
import Sidebar from './_partials/_sidebar';


const _default = ({ children }) => {
    useBodyAttributes({
      id: 'kt_app_body',
      'data-kt-app-layout': 'dark-sidebar',
      'data-kt-app-header-fixed': 'true',
      'data-kt-app-sidebar-enabled': 'true',
      'data-kt-app-sidebar-fixed': 'true',
      'data-kt-app-sidebar-hoverable': 'true',
      'data-kt-app-sidebar-push-header': 'true',
      'data-kt-app-sidebar-push-toolbar': 'true',
      'data-kt-app-sidebar-push-footer': 'true',
      'data-kt-app-toolbar-enabled': 'true',
      class: 'app-default',
    });

    return (
        <div>
            <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
                <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
                    
                    {/* layout-partial:Header */}
                    <Header />

                    <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
                        
                        {/* layout-partial:Sidebar */}
                        <Sidebar />       

                        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                            <div className="d-flex flex-column flex-column-fluid">
                                
                                {/* layout-partial:Toolbar */}
                                {/* layout-partial:layout/partials/_toolbar.html */}

                                {/* layout-partial:Content */}
                                {children}

                            </div>
                            
                            {/* layout-partial:Footer */}
                            <Footer />

                        </div>
                    </div>
                </div>
            </div>

            {/* layout-partial:Drawers */}
            {/* layout-partial:partials/_drawers.html */}
        </div>
    );
};

export default _default;