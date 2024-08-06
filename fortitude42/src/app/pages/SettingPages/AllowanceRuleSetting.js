import React, { useState } from 'react';
import { useAuth } from '../../auth/core/AuthProvider';
import MasterPage from '../../modules/_layout/_default';

const AllowanceRuleSetting = () => {
    const [showDaily, setShowDaily] = useState(false);
    const [headingText, setHeadingText] = useState('Daily Allowance');

    const pad = (num) => num.toString().padStart(2, '0');

    const toggleShowDaily = () => {
        setShowDaily((prevState) => !prevState);
        setHeadingText((prevState) => (prevState === 'Daily Allowance' ? 'Weekly Allowance' : 'Daily Allowance'));
    };

    return (
        <MasterPage>
            <div className="d-flex flex-column flex-column-fluid p-4">
                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                        <h2 style={{ textDecoration: 'underline' }}>Allowance Rule Setting</h2>
                    </div>
                </div>
                <div className="d-flex flex-row border">
                    <div className="d-flex flex-column flex-row-fluid border p-10">
                        <div className="d-flex mt-5">
                          <div className="overflow-y-auto w-150px">
                            <table className="table table-rounded table-row-bordered border gy-7 gs-7">
                                <thead>
                                    <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                                        <th>Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Allowance</td>
                                    </tr>
                                </tbody>
                            </table>
                          </div>
                          <div className="overflow-y-auto w-250px">
                            <table className="table table-rounded table-row-bordered border gy-7 gs-7">
                              <thead>
                                <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                                  <th>Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Standard</td>
                                    </tr>
                                  </tbody>
                              </table>
                          </div>
                            <div className="d-flex flex-column w-75 p-3">                               
                              {/*Key-in(Part 1)*/}
                              {['Code', 'Description'].map(label => (
                                <div className="mb-3" key={label}>
                                  <label className="form-label">{label}</label>
                                    <input
                                      type="text"
                                      className="form-control "
                                      placeholder={label}
                                  />
                                </div>
                              ))}

                              <hr></hr>
                              <div className="d-flex justify-content-between align-items-center">
                                  <div id="kt_app_toolbar">
                                      <div id="toolbar_container">
                                          <h2 style={{ textDecoration: 'underline' }}>{headingText}</h2>
                                      </div>
                                  </div>
                                  <button
                                      type="button"
                                      className="btn btn-primary me-2"
                                      onClick={toggleShowDaily}
                                  >
                                      {showDaily ? 'Variable Params' : 'Daily Allowance'}
                                  </button>
                              </div>
                              {showDaily ? (
                                <>                              
                                  {/*Daily Allowance*/}
                                  <div className="row mb-3 align-items-center">
                                      <div className="col-auto d-flex align-items-center">
                                          <label className="form-label me-10">Meal</label>
                                          <select className="form-select" aria-label="meal">
                                              <option value="0">x0</option>
                                              <option value="1">x0.5</option>
                                              <option value="2">x1</option>
                                              <option value="3">x1.5</option>
                                              <option value="4">x2</option>
                                          </select>
                                      </div>
                                      <div className="col d-flex align-items-center">
                                          <label className="form-label me-5">Monthly Limit</label>
                                          <input type="number" placeholder="00.00" className="form-control w-50" />
                                      </div>
                                  </div>
                                  <div className="row mb-3 align-items-center">
                                      <div className="col-auto d-flex align-items-center">
                                          <label className="form-label me-10">Transport</label>
                                          <select className="form-select" aria-label="transport">
                                              <option value="0">x0</option>
                                              <option value="1">x0.5</option>
                                              <option value="2">x1</option>
                                              <option value="3">x1.5</option>
                                              <option value="4">x2</option>
                                          </select>
                                      </div>
                                      <div className="col d-flex align-items-center">
                                          <label className="form-label me-5">Monthly Limit</label>
                                          <input type="number" placeholder="00.00" className="form-control w-50" />
                                      </div>
                                  </div>
                                  <div className="row mb-3 align-items-center">
                                      <div className="col-auto d-flex align-items-center">
                                          <label className="form-label me-10">Over Time</label>
                                          <select className="form-select" aria-label="ot">
                                              <option value="0">x0</option>
                                              <option value="1">x0.5</option>
                                              <option value="2">x1</option>
                                              <option value="3">x1.5</option>
                                              <option value="4">x2</option>
                                          </select>
                                      </div>
                                      <div className="col d-flex align-items-center">
                                          <label className="form-label me-5">Monthly Limit</label>
                                          <input type="number" placeholder="00.00" className="form-control w-50" />
                                      </div>
                                  </div>
                                  <div className="row mb-3 align-items-center">
                                      <div className="col-auto d-flex align-items-center">
                                          <label className="form-label me-10">Attendance</label>
                                          <select className="form-select" aria-label="attendance">
                                              <option value="0">x0</option>
                                              <option value="1">x0.5</option>
                                              <option value="2">x1</option>
                                              <option value="3">x1.5</option>
                                              <option value="4">x2</option>
                                          </select>
                                      </div>
                                      <div className="col d-flex align-items-center">
                                          <label className="form-label me-5">Monthly Limit</label>
                                          <input type="number" placeholder="00.00" className="form-control w-50" />
                                      </div>
                                  </div>
                                  <div className="row mb-3 align-items-center">
                                      <div className="col-auto d-flex align-items-center">
                                          <label className="form-label me-10">Daily Allowance</label>
                                          <select className="form-select" aria-label="medaily-1">
                                              <option value="0">x0</option>
                                              <option value="1">x0.5</option>
                                              <option value="2">x1</option>
                                              <option value="3">x1.5</option>
                                              <option value="4">x2</option>
                                          </select>
                                      </div>
                                      <div className="col d-flex align-items-center">
                                          <label className="form-label me-5">Monthly Limit</label>
                                          <input type="number" placeholder="00.00" className="form-control w-50" />
                                      </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {/*Variable Params*/}
                                  {/* ...Your Variable Params content... */}
                                </>
                              )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MasterPage>
    );
};

export default AllowanceRuleSetting;
