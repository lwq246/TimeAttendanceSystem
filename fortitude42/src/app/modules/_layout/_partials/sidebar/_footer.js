import React from 'react';

const _footer = () => {

    return (
        <div className="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6" id="kt_app_sidebar_footer ">
            <a
                href="/help-file"
                className="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100"
                data-bs-toggle="tooltip"
                data-bs-trigger="hover"
                data-bs-dismiss-="click"
                title="more than 200+ downloadable resources">
                    
                <span className="btn-label">
                    Help File
                </span>
                <i className="ki-duotone ki-document btn-icon fs-2 m-0">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>
            </a>
        </div>
    );
};

export default _footer;