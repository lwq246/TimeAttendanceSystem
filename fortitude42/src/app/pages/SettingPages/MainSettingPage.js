import React from 'react';
import { useAuth } from '../../auth/core/AuthProvider';
//Master Layout
import { Link } from 'react-router-dom';
import MasterPage from '../../modules/_layout/_default';
const MainSettingPage = () => {
    const { logout } = useAuth();

    return (
        <MasterPage>
            <div className="d-flex flex-column flex-column-fluid p-4" >

                {/* begin::Toolbar */}
                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    {/* begin::Toolbar container */}
                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                        {/* begin::Page title */}
                        <h2>Setting</h2>
                    </div>
                </div>

              </div>
              <div className="w-full flex-column">
                <div className='row w-full  justify-content-center column-gap-10 mb-8'>
                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/branch-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Branch Setting</h2>
                        </button>
                      </Link>
                  </div>

                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/department-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Department Setting</h2>
                        </button>
                      </Link>
                  </div>
                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/public-holiday-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Public Holiday Setting</h2>
                        </button>
                      </Link>
                  </div>
                </div>
                <div className='row w-full  justify-content-center column-gap-10 mb-8'>
                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/working-shift-pattern-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Working/Shift Pattern Setting</h2>
                        </button>
                      </Link>
                  </div>
                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/calendar-working-team-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Calendar Working Team Setting</h2>
                        </button>
                      </Link>
                  </div>
                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/working-shift-calendar-code-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Working/Shift Calendar Code Setting</h2>
                        </button>
                      </Link>
                  </div>
                </div>
                <div className='row w-full  justify-content-center column-gap-10 mb-8'>
                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/reason-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Reason Setting</h2>
                        </button>
                      </Link>
                  </div>

                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/employee-rate-and-customer-field-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Employee Rate And Customer Field Setting</h2>
                        </button>
                      </Link>
                  </div>
                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/clocking-id-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Clocking ID Setting</h2>
                        </button>
                      </Link>
                  </div>
                </div>
                <div className='row w-full  justify-content-center column-gap-10 mb-8'>
                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/reason-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Reason Setting</h2>
                        </button>
                      </Link>
                  </div>

                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/employee-rate-and-customer-field-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Employee Rate And Customer Field Setting</h2>
                        </button>
                      </Link>
                  </div>
                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/clocking-id-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Clocking ID Setting</h2>
                        </button>
                      </Link>
                  </div>
                </div>
                <div className='row w-full  justify-content-center column-gap-10 mb-8'>
                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/reason-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Reason Setting</h2>
                        </button>
                      </Link>
                  </div>

                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/employee-rate-and-customer-field-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Employee Rate And Customer Field Setting</h2>
                        </button>
                      </Link>
                  </div>
                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/clocking-id-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Clocking ID Setting</h2>
                        </button>
                      </Link>
                  </div>
                </div>
                <div className='row w-full  justify-content-center column-gap-10 mb-8'>
                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/flexi-meal-break-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>FleXi Meal Break Setting</h2>
                        </button>
                      </Link>
                  </div>

                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/overtime-rule-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Overtime Rule Setting</h2>
                        </button>
                      </Link>
                  </div>
                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/working-rule-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Working Rule Setting</h2>
                        </button>
                      </Link>
                  </div>
                </div>
                <div className='row w-full  justify-content-center column-gap-10 mb-8'>
                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/allowance-rule-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>Allowance Rule Setting</h2>
                        </button>
                      </Link>
                  </div>
                  <div className="d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center"style={{ height: "25vh" }}>  
                      <Link to={`/user-setting`} className="menu-title w-100 h-100">
                        <button
                          className="btn btn-link p-0 m-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{ textDecoration: 'none', border: 'none', backgroundColor: 'transparent' }}
                        >
                          <h2>User Setting</h2>
                        </button>
                      </Link>
                  </div>
                </div>
              </div>
        </MasterPage>
    );
};

export default MainSettingPage;
