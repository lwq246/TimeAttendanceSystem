import React, { useState } from 'react';
import { useAuth } from '../../auth/core/AuthProvider';
import MasterPage from '../../modules/_layout/_default';
import MonthlyAllowance from './MonthlyAllowance';
import DailyAllowance from './DailyAllowance';

const AllowanceRuleSetting = () => {
    const [showDaily, setShowDaily] = useState(true);
    const [headingText, setHeadingText] = useState('Daily Allowance');

    const pad = (num) => num.toString().padStart(2, '0');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const toggleShowDaily = () => {
        setShowDaily((prevState) => !prevState);
        setHeadingText((prevState) => (prevState === 'Daily Allowance' ? 'Weekly Allowance' : 'Daily Allowance'));
    };
    const [formData, setFormData] = useState({
        meal: '0',
        limit1: '',
        transport: '0',
        limit2: '',
        ot: '0',
        limit3: '',
        attendance: '0',
        limit4: '',
        daily: '0',
        limit5: '',
    });

    return (
        <MasterPage>
            <div className="d-flex flex-column flex-column-fluid p-4">
                <div id="kt_app_toolbar" className="app-toolbar py-lg-6">
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
                              <DailyAllowance></DailyAllowance>
                              <MonthlyAllowance></MonthlyAllowance>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </MasterPage>
    );
};

export default AllowanceRuleSetting;
