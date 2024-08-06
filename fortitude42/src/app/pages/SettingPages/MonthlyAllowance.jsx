import React, { useState } from 'react';

export default function MonthlyAllowance() {
    const [showDaily, setShowDaily] = useState(false);
    const [headingText, setHeadingText] = useState('Daily Allowance');

    const toggleShowDaily = () => {
        setShowDaily(prevState => !prevState);
        setHeadingText(prevState => prevState === 'Daily Allowance' ? 'Weekly Allowance' : 'Daily Allowance');
    };

    return (
        <div>
            <hr />
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
                    {/* Add your Variable Params content here */}
                </>
            )}
        </div>
    );
}
