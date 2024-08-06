import React, { useState } from 'react';
import { useAuth } from '../../auth/core/AuthProvider';
import MasterPage from '../../modules/_layout/_default';

const AllowanceRuleSetting = () => {
    const { logout } = useAuth();
    const [time, setTime] = useState('00:00:00');
    const [showDaily, setShowDaily] = useState(false);

    const pad = (num) => num.toString().padStart(2, '0');

    const incrementTime = (time, setTime) => {
        let [hours, minutes, seconds] = time.split('.').map(Number);

        seconds += 1;
        if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours += 1;
        }
        if (hours >= 24) {
            hours = 0;
        }

        setTime(`${pad(hours)}.${pad(minutes)}.${pad(seconds)}`);
    };

    const decrementTime = (time, setTime) => {
        let [hours, minutes, seconds] = time.split('.').map(Number);

        seconds -= 1;
        if (seconds < 0) {
            seconds = 59;
            minutes -= 1;
        }
        if (minutes < 0) {
            minutes = 59;
            hours -= 1;
        }
        if (hours < 0) {
            hours = 23;
        }

        setTime(`${pad(hours)}.${pad(minutes)}.${pad(seconds)}`);
    };

    const handleInputChange = (e, setTime) => {
        const value = e.target.value;
        const timePattern = /^([0-1]?[0-9]|2[0-3]).([0-5]?[0-9]).([0-5]?[0-9])$/;
        if (timePattern.test(value)) {
            setTime(value);
        }
    };

    const toggleShowDaily = () => {
        setShowDaily((prevState) => !prevState);
    };

    return (
        <MasterPage>
            <div className="d-flex flex-column flex-column-fluid p-4">
                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                        <h2>Allowance Rule Setting</h2>
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
                                        <td>Allowence</td>
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
                              <div className="d-flex justify-content-end">
                                    <button
                                        type="button"
                                        className="btn btn-primary me-2"
                                        onClick={toggleShowDaily}
                                    >
                                        {showDaily ? 'Weekly' : 'Daily'}
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
                                          <input type="number" className="form-control w-50" />
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
                                          <input type="number" className="form-control w-50" />
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
                                          <input type="number" className="form-control w-50" />
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
                                          <input type="number" className="form-control w-50" />
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
                                          <input type="number" className="form-control w-50" />
                                      </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="mb-3">
                                    <label className="form-label">Allowance Type</label>
                                    <select className="form-select form-select-solid" aria-label="Select example">
                                        <option value="" disabled selected>Please select your choice</option>
                                        <option value="type1">Full Day</option>
                                        <option value="type2">Half Day</option>
                                    </select>
                                  </div>
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
