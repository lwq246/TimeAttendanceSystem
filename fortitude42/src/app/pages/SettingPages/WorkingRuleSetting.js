import React from 'react';
import { useAuth } from '../../auth/core/AuthProvider';
import MasterPage from '../../modules/_layout/_default';
import ButtonGroup from '../components/ButtonGroup';
import SelectBox from '../components/SelectBox';

const WorkingRuleSetting = () => {
    const { logout } = useAuth();

    return (
        <MasterPage>
            <div className="d-flex flex-column flex-column-fluid p-4">
                {/* begin::Toolbar */}
                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    {/* begin::Toolbar container */}
                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                        {/* begin::Page title */}
                        <h2>Working Rule Setting</h2>
                    </div>
                    {/* end::Toolbar container */}
                </div>
                {/* end::Toolbar */}
                
                {/* Example content */}
                <div className="content">
                    <ButtonGroup />
                    <SelectBox />
                </div>
            </div>
        </MasterPage>
    );
};

export default WorkingRuleSetting;
