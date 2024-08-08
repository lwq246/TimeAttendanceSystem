import React, { useState } from 'react';

export default function MonthlyAllowance() {
    const [formData, setFormData] = useState({
        perfectAtten: '0',
        monthlyLimit1: '',
        monthlyAllowance2: '0',
        monthlyLimit2: '',
        monthlyAllowance3: '0',
        monthlyLimit3: '',
        monthlyAllowance4: '0',
        monthlyLimit4: '',
        monthlyAllowance5: '0',
        monthlyLimit5: '',
        monthlyAllowance6: '0',
        monthlyLimit6: '',
        monthlyAllowance7: '0',
        monthlyLimit7: '',
        monthlyAllowance8: '0',
        monthlyLimit8: '',
        monthlyAllowance9: '0',
        monthlyLimit9: '',
        monthlyAllowance10: '0',
        monthlyLimit10: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <hr />
            <div id="kt_app_toolbar">
                <div id="toolbar_container">
                    <h2 style={{ textDecoration: 'underline' }}>Monthly Allowance</h2>
                </div>
            </div>
            <ul className="nav nav-tabs  mb-5 fs-6">
                <li>
                    <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_1">
                        I-VI
                    </a>
                </li>
                <li>
                    <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2">
                        VII-X
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="kt_tab_pane_1">
                    {/* I-VI Part */}
                    <div className="row mb-3 align-items-center">
                        <div className="col-auto d-flex align-items-center">
                            <label className="form-label me-10">Perfect Atten</label>
                            <select
                                className="form-select"
                                name="perfectAtten"
                                value={formData.perfectAtten}
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
                            <label className="form-label me-10">Monthly Allowance 2</label>
                            <select
                                className="form-select"
                                aria-label="m2"
                                name="monthlyAllowance2"
                                value={formData.monthlyAllowance2}
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
                            <label className="form-label me-10">Monthly Allowance 3</label>
                            <select
                                className="form-select"
                                aria-label="m3"
                                name="monthlyAllowance3"
                                value={formData.monthlyAllowance3}
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
                            <label className="form-label me-10">Monthly Allowance 4</label>
                            <select
                                className="form-select"
                                aria-label="m4"
                                name="monthlyAllowance4"
                                value={formData.monthlyAllowance4}
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
                            <label className="form-label me-10">Monthly Allowance 5</label>
                            <select
                                className="form-select"
                                aria-label="m5"
                                name="monthlyAllowance5"
                                value={formData.monthlyAllowance5}
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
                    <div className="row mb-3 align-items-center">
                        <div className="col-auto d-flex align-items-center">
                            <label className="form-label me-10">Monthly Allowance 6</label>
                            <select
                                className="form-select"
                                aria-label="m6"
                                name="monthlyAllowance6"
                                value={formData.monthlyAllowance6}
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
                                name="monthlyLimit6"
                                value={formData.monthlyLimit6}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="kt_tab_pane_2">
                    {/* VII-X Part */}
                    <div className="row mb-3 align-items-center">
                        <div className="col-auto d-flex align-items-center">
                            <label className="form-label me-10">Monthly Allowance 7</label>
                            <select
                                className="form-select"
                                aria-label="m7"
                                name="monthlyAllowance7"
                                value={formData.monthlyAllowance7}
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
                                name="monthlyLimit7"
                                value={formData.monthlyLimit7}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <div className="col-auto d-flex align-items-center">
                            <label className="form-label me-10">Monthly Allowance 8</label>
                            <select
                                className="form-select"
                                aria-label="m8"
                                name="monthlyAllowance8"
                                value={formData.monthlyAllowance8}
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
                                name="monthlyLimit8"
                                value={formData.monthlyLimit8}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <div className="col-auto d-flex align-items-center">
                            <label className="form-label me-10">Monthly Allowance 9</label>
                            <select
                                className="form-select"
                                aria-label="m9"
                                name="monthlyAllowance9"
                                value={formData.monthlyAllowance9}
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
                                name="monthlyLimit9"
                                value={formData.monthlyLimit9}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <div className="col-auto d-flex align-items-center">
                            <label className="form-label me-10">Monthly Allowance 10</label>
                            <select
                                className="form-select"
                                aria-label="m10"
                                name="monthlyAllowance10"
                                value={formData.monthlyAllowance10}
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
                                name="monthlyLimit10"
                                value={formData.monthlyLimit10}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
