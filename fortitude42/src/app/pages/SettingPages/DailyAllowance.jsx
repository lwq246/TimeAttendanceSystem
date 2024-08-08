import React, { useState } from 'react';

export default function DailyAllowance() {
    const [formData, setFormData] = useState({
        variable1:'0',
        variable2:'0',
        variable3:'0',
        variable4:'0',
        variable5:'0',
        variable6:'0',
        variable7:'0',
        variable8:'0',
        variable9:'0',
        variable10:'0',
        variable11:'0',
        variable12:'0',
        filter1:'0',
        filter2:'0',
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
                                  <li>
                                      <a 
                                          className="nav-link active" 
                                          data-bs-toggle="tab" 
                                          href="#kt_tab_pane_3" 
                                          onClick={() => handleTabClick('Daily Allowance')}
                                      >
                                          Daily Allowance
                                      </a>
                                  </li>
                                  <li>
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
                <div className="tab-pane fade show active" id="kt_tab_pane_4">
                    {/*Variable Paramsa Part */}
                    <div className="row mb-3 align-items-center">
                        <div className="col-5 d-flex align-items-center">
                            <label className="form-label me-2">Variable 1</label>
                            <select
                                className="form-select"
                                name="variable1"
                                value={formData.variable1}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                        <div className="col-5 d-flex align-items-center">
                            <label className="form-label me-2">Variable 2</label>
                            <select
                                className="form-select"
                                name="variable2"
                                value={formData.variable2}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-5 d-flex align-items-center">
                            <label className="form-label me-2">Variable 3</label>
                            <select
                                className="form-select"
                                name="variable3"
                                value={formData.variable3}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                        <div className="col-5 d-flex align-items-center">
                            <label className="form-label me-2">Variable 4</label>
                            <select
                                className="form-select"
                                name="variable4"
                                value={formData.variable4}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-5 d-flex align-items-center">
                            <label className="form-label me-2">Variable 5</label>
                            <select
                                className="form-select"
                                name="variable5"
                                value={formData.variable5}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                        <div className="col-5 d-flex align-items-center">
                            <label className="form-label me-2">Variable 6</label>
                            <select
                                className="form-select"
                                name="variable6"
                                value={formData.variable6}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-5 d-flex align-items-center">
                            <label className="form-label me-2">Variable 7</label>
                            <select
                                className="form-select"
                                name="variable7"
                                value={formData.variable7}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                        <input className="form-check-input h-20px w-20px" type="checkbox" value="" id="uncheck"/>
                        <div className="col-5 d-flex align-items-center">
                            <label className="form-label me-2">Variable 8</label>
                            <select
                                className="form-select"
                                name="variable8"
                                value={formData.variable8}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                        <input className="form-check-input h-20px w-20px" type="checkbox" value="" id="uncheck"/>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-5 d-flex align-items-center">
                            <label className="form-label me-2">Variable 9</label>
                            <select
                                className="form-select"
                                name="variable9"
                                value={formData.variable9}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                        <input className="form-check-input h-20px w-20px" type="checkbox" value="" id="uncheck"/>
                        <div className="col-5 d-flex align-items-center">
                            <label className="form-label me-2">Variable 10</label>
                            <select
                                className="form-select"
                                name="variable10"
                                value={formData.variable10}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                        <input className="form-check-input h-20px w-20px" type="checkbox" value="" id="uncheck"/>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-5 d-flex align-items-center">
                            <label className="form-label me-2">Variable 11</label>
                            <select
                                className="form-select"
                                name="variable11"
                                value={formData.variable11}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                        <input className="form-check-input h-20px w-20px" type="checkbox" value="" id="uncheck"/>
                        <div className="col-5 d-flex align-items-center">
                            <label className="form-label me-2">Variable 12</label>
                            <select
                                className="form-select"
                                name="variable12"
                                value={formData.variable12}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                        <input className="form-check-input h-20px w-20px" type="checkbox" value="" id="uncheck"/>
                    </div>

                    <hr/>
                    
                    <div className="row mb-3 align-items-center">
                        <div className="col-5 d-flex align-items-center">
                            <label className="form-label me-2">Custom Filter 1</label>
                            <select
                                className="form-select"
                                name="filter1"
                                value={formData.filter1}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                        <div className="col-5 d-flex align-items-center">
                            <label className="form-label me-2">Custom Filter 2</label>
                            <select
                                className="form-select"
                                name="filter2"
                                value={formData.filter2}
                                onChange={handleChange}
                            >
                                <option value="0">x0</option>
                                <option value="1">x0.5</option>
                                <option value="2">x1</option>
                                <option value="3">x1.5</option>
                                <option value="4">x2</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
