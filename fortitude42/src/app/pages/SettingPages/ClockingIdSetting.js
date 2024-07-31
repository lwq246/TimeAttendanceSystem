import React from 'react';
import { useAuth } from '../../auth/core/AuthProvider';
//Master Layout
import MasterPage from '../../modules/_layout/_default';
import ButtonGroup from '../components/ButtonGroup';
import SelectBox from '../components/SelectBox';
const ClockingIdSetting = () => {
    const { logout } = useAuth();

    return (
        <MasterPage>
            <div className="d-flex flex-column flex-column-fluid p-4" >

                {/* begin::Toolbar */}
                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    {/* begin::Toolbar container */}
                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                        {/* begin::Page title */}
                        <h2>Clock ID Setting</h2>
                    </div>
                </div>

                <div className="d-flex flex-column border w-100">
                    <div className="d-flex flex-column flex-row-fluid border p-10 w-100">
                        <div className="d-flex flex-row-fluid w-100">
                            <div className="d-flex flex-row-fluid w-100">
                                <div className="col-4 d-flex flex-center flex-start">
                                    <div className="d-flex flex-column gap-4 flex-start w-100">
                                        <div className=" d-flex flex-row-fluid align-items-center w-100">
                                        <label className="form-label col-3">Branch</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-solid col-7"
                                            placeholder="Branch"
                                        />
                                        </div>
                                        <div className="d-flex flex-row-fluid align-items-center w-100">
                                        <label className="form-label col-3">Description</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-solid col-7"
                                            placeholder="Branch"
                                        />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-8 d-flex flex-center flex-start">
                                    <ButtonGroup/>
                                </div>
                            </div>
                        </div>

                        </div>
                        <div className="d-flex flex-column-fluid  flex-start px-10 border-top-0">
          <table className="table table-row-dashed table-row-gray-300 gy-7">
            <thead>
              <tr className="fw-bolder fs-6 text-gray-800">
                <th>
                  <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </th>
                <th className="text-gray-500" style={{ width: "45%" }}>
                  Clock ID
                </th>
                <th className="text-gray-500" style={{ width: "45%" }}>
                  Description
                </th>
               
                <th className="text-gray-500" style={{ width: "10%" }}>
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                  <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
               
                <td>2011/04/25</td>
                <td>$320,800</td>
                <td>
                  <SelectBox />
                </td>
              </tr>
              
                
            </tbody>
          </table>
        </div>
        <ul className="pagination" style={{ marginLeft: "auto" }}>
          <li className="page-item previous disabled">
            <a href="#" className="page-link">
              <i className="previous"></i>
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              1
            </a>
          </li>
          <li className="page-item active">
            <a href="#" className="page-link">
              2
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              3
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              4
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              5
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              6
            </a>
          </li>
          <li className="page-item next">
            <a href="#" className="page-link">
              <i className="next"></i>
            </a>
          </li>
        </ul>
      </div>

            </div>
           
        </MasterPage>
    );
};

export default ClockingIdSetting;
