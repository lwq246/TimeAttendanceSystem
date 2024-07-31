import React from 'react';
import { useAuth } from './../../auth/core/AuthProvider';

//Master Layout
import MasterPage from '../_layout/_default';

const Dashboard = () => {
    const { logout } = useAuth();

    return (        
        <MasterPage>
            <div className="d-flex flex-column flex-column-fluid">


                {/* begin::Toolbar */}
                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    {/* begin::Toolbar container */}
                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                        {/* begin::Page title */}
                       </div>


</div>


            </div>
        </MasterPage>
    );
};

export default Dashboard;