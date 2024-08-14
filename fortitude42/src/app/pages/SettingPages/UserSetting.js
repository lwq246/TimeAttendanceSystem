import React, { useState } from 'react';
import { useAuth } from '../../auth/core/AuthProvider';
import MasterPage from '../../modules/_layout/_default';
import ButtonGroup from '../components/ButtonGroup';

const UserSetting = () => {
  const { logout } = useAuth(); // Assuming this logs the user out
  const [isLocked, setIsLocked] = useState(false); // Shared state for checkboxes

  const handleCheckboxChange = () => {
    setIsLocked((prev) => !prev); // Toggle the locked state
  };

  const handleClose = () => {
    logout(); // Call the logout function
    // Additional code to handle closing the component or redirecting can be added here if necessary
  };

  return (
    <MasterPage>
      <div className="d-flex flex-column flex-column-fluid p-4">
        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
          <div
            id="kt_app_toolbar_container"
            className="app-container container-xxl d-flex flex-stack"
            style={{ textDecoration: 'underline' }}
          >
            <h2>User Setting</h2>
          </div>
        </div>

        <div className="d-flex flex-row border">
          <div className="d-flex flex-column flex-row-fluid border p-10">
            <ButtonGroup />

            <div className="d-flex mt-5">
              <div className="d-flex flex-column flex-grow-1">
                <div className="d-flex flex-column-fluid flex-start px-10 border-top-0">
                  <table className="table table-row-dashed">
                    <thead>
                      <tr className="fw-bolder fs-5">
                        <th className="" style={{ width: "20%" }}>
                          User ID
                        </th>
                        <th className="" style={{ width: "20%" }}>
                          Name
                        </th>
                        <th className="" style={{ width: "25%" }}>
                          Locked
                        </th>
                        <th className="" style={{ width: "25%" }}>
                          Expiry Date
                        </th>
                        <th className="" style={{ width: "10%" }}>
                          Access Group
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>System Architect</td>
                        <td>System Architect</td>
                        <td>
                          <input 
                            type="checkbox" 
                            className="form-check-input" 
                            id="lockedCheckbox1"
                            checked={isLocked}
                            onChange={handleCheckboxChange}
                          />
                        </td>
                        <td>System Architect</td>
                        <td>System Architect</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="row mb-3 align-items-center">
                  <div className="col-3 d-flex align-items-center">
                    <label className="form-label me-5">User ID</label>
                    <input
                      type="text"
                      placeholder="HI"
                      className="form-control"
                    />
                  </div>
                  <div className="col-7 d-flex align-items-center">
                    <label className="form-label me-5">Name</label>
                    <input
                      type="text"
                      placeholder="HI"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mb-3 align-items-center">
                  <div className="col-4 d-flex align-items-center">
                    <label className="form-label me-5">Expiry</label>
                    <input
                      type="text"
                      placeholder="HI"
                      className="form-control"
                    />
                  </div>
                  <div className="col-3 d-flex align-items-center">
                    <label className="form-label me-5">Last Login</label>
                    <input
                      type="text"
                      placeholder="HI"
                      className="form-control"
                    />
                  </div>
                  <div className="col-3 d-flex align-items-center">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id="lockedCheckbox2"
                      checked={isLocked}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-label me-5">Locked</label>
                    <input
                      type="text"
                      placeholder="HI"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mb-3 align-items-center">
                  <div className="col-3 d-flex align-items-center">
                    <label className="form-label me-5">SSO</label>
                    <input
                      type="text"
                      placeholder="HI"
                      className="form-control"
                    />
                  </div>
                  <div className="col-7 d-flex align-items-center">
                    <label className="form-label me-5">Access Group</label>
                    <input
                      type="text"
                      placeholder="HI"
                      className="form-control w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-5 justify-content-between">
          <button type="button" id="addUser" className="btn btn-primary btn-equal-weight">Add User</button>
          <button type="button" id="modify" className="btn btn-primary btn-equal-weight">Modify</button>
          <button type="button" id="delete" className="btn btn-primary btn-equal-weight">Delete</button>
          <button type="button" id="export" className="btn btn-primary btn-equal-weight">Export</button>
          <button type="button" id="accessGroup" className="btn btn-primary btn-equal-weight">Access Group</button>
          <button type="button" id="accessRight" className="btn btn-primary btn-equal-weight">Access Right</button>
          <button type="button" id="close" className="btn btn-primary btn-equal-weight" onClick={handleClose}>Close</button>
        </div>
      </div>
    </MasterPage>
  );
};

export default UserSetting;
