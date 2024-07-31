import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './__menu';

const _menu = () => {
    return (
        <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
            <div className="app-sidebar-wrapper" id="kt_app_sidebar_menu_wrapper ">
                <div
                    className="scroll-y my-5 mx-3"
                    id="kt_app_sidebar_menu_scroll"
                    data-kt-scroll="true"
                    data-kt-scroll-activate="true"
                    data-kt-scroll-height="auto"
                    data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
                    data-kt-scroll-wrappers="#kt_app_sidebar_menu"
                    data-kt-scroll-offset="5px"
                    data-kt-scroll-save-state="true">
                    
                    <div
                        className="menu menu-column menu-rounded menu-sub-indention fw-semibold fs-6"
                        id="#kt_app_sidebar_menu"
                        data-kt-menu="true"
                        data-kt-menu-expand="false">
                        {/* Sidebar Menu start here */}

                        {/* Menu Category */}
                        <div className="menu-item pt-5">
                            <div className="menu-content">
                                <span className="menu-heading fw-bold text-uppercase fs-7">Pages</span>
                            </div>
                        </div>

                        {/* begin:Menu item */}
                        <div className="menu-item">
                            {/* begin:Menu link */}
                            <Link className="menu-link" to="/apps/calendar">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-calendar-8 fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                        <span className="path4"></span>
                                        <span className="path5"></span>
                                        <span className="path6"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Calendar</span>
                            </Link>
                            {/* end:Menu link */}
                        </div>
                        {/* end:Menu item */}

                        <Menu title="User Profile" icon="ki-address-book">
                            <div className="menu-item">
                                <Link className="menu-link" to="/user-profile/overview">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Overview</span>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <Link className="menu-link" to="/user-profile/documents">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Documents</span>
                                </Link>
                            </div>
                        </Menu>

                        <Menu title="User Profile 2">
                            <div className="menu-item">
                                <Link className="menu-link" to="/user-profile/overview">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Overview</span>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <Link className="menu-link" to="/user-profile/documents">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Documents</span>
                                </Link>
                            </div>
                        </Menu>

                        <Menu title="Setting" icon="ki-setting">
                            <div className="menu-item">
                                <Link className="menu-link" to="/branch-setting">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Branch Setting</span>
                                </Link>
                                <Link className="menu-link" to="/department-setting">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Department Setting</span>
                                </Link>
                                <Link className="menu-link" to="/public-holiday-setting">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Public Holiday Setting</span>
                                </Link>
                                <Link className="menu-link" to="/working-shift-pattern-setting">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Working/Shfit Pattern Setting</span>
                                </Link>
                                <Link className="menu-link" to="/calendar-working-team-setting">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Calendar Working Team Setting</span>
                                </Link>
                                <Link className="menu-link" to="/working-shift-calendar-code-setting">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Working/Shift Calendar Code Setting</span>
                                </Link>
                                <Link className="menu-link" to="/reason-setting">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Reason Setting</span>
                                </Link>
                                <Link className="menu-link" to="/employee-rate-and-customer-field-setting">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Employee Rate And Customer Field Setting</span>
                                </Link>
                                <Link className="menu-link" to="/clocking-id-setting">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Clocking ID Setting</span>
                                </Link>
                                <Link className="menu-link" to="/overtime-rule-setting">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Overtime Rule Setting</span>
                                </Link>
                            </div>
                        </Menu>
                        {/* Sidebar Menu end here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default _menu;
