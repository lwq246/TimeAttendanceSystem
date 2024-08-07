import React, { useState } from 'react';

export default function DailyAllowance() {
    const [formData, setFormData] = useState({
        meal: '0',
        monthlyLimit1: '',
        transport: '0',
        monthlyLimit2: '',
        overtime: '0',
        monthlyLimit3: '',
        attendance: '0',
        monthlyLimit4: '',
        dailyallowance: '0',
        monthlyLimit5: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const [activeTab, setActiveTab] = useState('Daily Allowance');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <ul className="nav nav-tabs nav-line-tabs mb-5 fs-6">
                                  <li className="nav-item">
                                      <a 
                                          className="nav-link active" 
                                          data-bs-toggle="tab" 
                                          href="#kt_tab_pane_3" 
                                          onClick={() => handleTabClick('Daily Allowance')}
                                      >
                                          Daily Allowance
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a 
                                          className="nav-link" 
                                          data-bs-toggle="tab" 
                                          href="#kt_tab_pane_4" 
                                          onClick={() => handleTabClick('Variable Params')}
                                      >
                                          Variable Params
                                      </a>
                                  </li>
            </ul>
            <div id="kt_app_toolbar">
                <div id="kt_app_toolbar_container">
                    <h2 style={{ textDecoration: 'underline' }}>{activeTab}</h2>
                </div>
            </div>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="kt_tab_pane_3">
                    {/*Daily Allowance Part */}
                    <div className="row mb-3 align-items-center">
                        <div className="col-auto d-flex align-items-center">
                            <label className="form-label me-10">Meal</label>
                            <select
                                className="form-select"
                                name="meal"
                                value={formData.meal}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                        <div className="col d-flex align-items-center">
                            <label className="form-label me-5">Monthly Limit</label>
                            <input
                                type="number"
                                placeholder="00.00"
                                className="form-control w-50"
                                name="monthlyLimit1"
                                value={formData.monthlyLimit1}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <div className="col-auto d-flex align-items-center">
                            <label className="form-label me-10">Transport</label>
                            <select
                                className="form-select"
                                aria-label="transportation"
                                name="transport"
                                value={formData.transport}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                        <div className="col d-flex align-items-center">
                            <label className="form-label me-5">Monthly Limit</label>
                            <input
                                type="number"
                                placeholder="00.00"
                                className="form-control w-50"
                                name="monthlyLimit2"
                                value={formData.monthlyLimit2}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <div className="col-auto d-flex align-items-center">
                            <label className="form-label me-10">Over Time</label>
                            <select
                                className="form-select"
                                aria-label="ot"
                                name="overtime"
                                value={formData.overtime}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                        <div className="col d-flex align-items-center">
                            <label className="form-label me-5">Monthly Limit</label>
                            <input
                                type="number"
                                placeholder="00.00"
                                className="form-control w-50"
                                name="monthlyLimit3"
                                value={formData.monthlyLimit3}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <div className="col-auto d-flex align-items-center">
                            <label className="form-label me-10">Attendance</label>
                            <select
                                className="form-select"
                                aria-label="atten"
                                name="attendance"
                                value={formData.attendance}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                        <div className="col d-flex align-items-center">
                            <label className="form-label me-5">Monthly Limit</label>
                            <input
                                type="number"
                                placeholder="00.00"
                                className="form-control w-50"
                                name="monthlyLimit4"
                                value={formData.monthlyLimit4}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <div className="col-auto d-flex align-items-center">
                            <label className="form-label me-10">Daily Allowance</label>
                            <select
                                className="form-select"
                                aria-label="daily"
                                name="dailyallowance"
                                value={formData.dailyallowance}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                        <div className="col d-flex align-items-center">
                            <label className="form-label me-5">Monthly Limit</label>
                            <input
                                type="number"
                                placeholder="00.00"
                                className="form-control w-50"
                                name="monthlyLimit5"
                                value={formData.monthlyLimit5}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
