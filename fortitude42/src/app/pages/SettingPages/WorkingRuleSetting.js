
import React, { useState } from 'react';
import { useAuth } from '../../auth/core/AuthProvider';
import MasterPage from '../../modules/_layout/_default';
import ButtonGroup from '../components/ButtonGroup';

const WorkingRuleSetting = () => {
    const { logout } = useAuth();
    const [time, setTime] = useState('00:00:00');

    const [weekEndFromTime, setWeekEndFromTime] = useState('00:00:00');
    const [weekEndToTime, setWeekEndToTime] = useState('00:00:00');
    const [holidayEveFromTime, setHolidayEveFromTime] = useState('00:00:00');
    const [holidayEveToTime, setHolidayEveToTime] = useState('00:00:00');
    const [restDayWorkingTime, setRestDayWorkingTime] = useState('00.00.00');
    const [restDayMeal, setRestDayMeal] = useState('00.00.00');

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

    return (
        <MasterPage>
            <div className="d-flex flex-column flex-column-fluid p-4">
                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                        <h2>Overtime Rule Setting</h2>
                    </div>
                </div>
                <div className="d-flex flex-row border">
                    <div className="d-flex flex-column flex-row-fluid border p-10">
                        <ButtonGroup />
                        <div className="d-flex mt-5">
                            <div className="overflow-y-auto w-25">
                                <table className="table table-rounded table-row-bordered border gy-7 gs-7">
                                    <thead>
                                        <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                                            <th>Code</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>H</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex flex-column w-75 p-3">
                              {/* Fields Section (Part 1)*/}
                                {['Code', 'FlxDefault Shirt Code'].map(label => (
                                    <div className="mb-3" key={label}>
                                        <label className="form-label">{label}</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-solid"
                                            placeholder={label}
                                        />
                                    </div>
                                ))}

                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <select className="form-select form-select-solid" aria-label="Select example">
                                        <option value="" disabled selected>Please select your choice</option>
                                        <option value="full">Full Day</option>
                                        <option value="half">Half Day</option>
                                    </select>
                                </div>
                                <hr></hr>
                              {/*Working Day (Part 2)*/}
                                <div className="row mb-3">
                                  <div className="col-4 d-flex flex-column align-items-start">
                                          <label className="form-label">Working Day(S03+S05+S06) OT Rate</label>
                                          <select className="form-select form-select-solid" aria-label="Select example">
                                              <option value="" disabled selected>x0</option>
                                              <option value="1">x0.5</option>
                                              <option value="2">x1</option>
                                              <option value="3">x1.5</option>
                                              <option value="4">x2</option>
                                          </select>
                                  </div>
                                  <div className="col-4 d-flex flex-column align-items-start">
                                          <label className="form-label">Working Day(S07) OT Rate</label>
                                          <select className="form-select form-select-solid" aria-label="Select example">
                                              <option value="" disabled selected>x0</option>
                                              <option value="1">x0.5</option>
                                              <option value="2">x1</option>
                                              <option value="3">x1.5</option>
                                              <option value="4">x2</option>
                                          </select>
                                  </div>  
                                </div>
                                <div className="row mb-3">
                                  <div className="col-4 d-flex flex-column align-items-start">
                                          <label className="form-label">Rest/Off Day(S01) OT Rate</label>
                                          <select className="form-select form-select-solid" aria-label="Select example">
                                              <option value="" disabled selected>x0</option>
                                              <option value="1">x0.5</option>
                                              <option value="2">x1</option>
                                              <option value="3">x1.5</option>
                                              <option value="4">x2</option>
                                          </select>
                                  </div>
                                  <div className="col-4 d-flex flex-column align-items-start">
                                        <label className="form-label">Rest/Off Day(S03+S05+S06) OT Rate</label>
                                        <select className="form-select form-select-solid" aria-label="Select example">
                                            <option value="" disabled selected>x0</option>
                                            <option value="1">x0.5</option>
                                            <option value="2">x1</option>
                                            <option value="3">x1.5</option>
                                            <option value="4">x2</option>
                                        </select>
                                  </div>
                                  <div className="col-4 d-flex flex-column align-items-start">
                                          <label className="form-label">Rest/Off Day(S07) OT Rate</label> 
                                          <select className="form-select form-select-solid" aria-label="Select example">
                                              <option value="" disabled selected>x0</option>
                                              <option value="1">x0.5</option>
                                              <option value="2">x1</option>
                                              <option value="3">x1.5</option>
                                              <option value="4">x2</option>
                                          </select>
                                  </div>
                                </div>
                              {/*Rest Day*/}
                                <div className="row mb-3">
                                  <div className="col-4">
                                      <label className="form-label">Rest Day Working<small>(Hour)</small></label>
                                      <div className="input-group">
                                          <input
                                              type="text"
                                              placeholder="00.00.00"
                                              className="form-control form-control-solid"
                                              value={restDayWorkingTime}
                                              onChange={(e) => handleInputChange(e, setRestDayWorkingTime)}
                                          />
                                          <button className="btn btn-primary" onClick={() => incrementTime(restDayWorkingTime, setRestDayWorkingTime)}>+</button>
                                          <button className="btn btn-secondary" onClick={() => decrementTime(restDayWorkingTime, setRestDayWorkingTime)}>-</button>
                                      </div>
                                  </div>                               
                                  <div className="col-4">
                                      <label className="form-label">Rest Day Meal<small>(Hour)</small></label>
                                      <div className="input-group">
                                          <input
                                              type="text"
                                              placeholder="00.00.00"
                                              className="form-control form-control-solid"
                                              value={restDayMeal}
                                              onChange={(e) => handleInputChange(e, setRestDayMeal)}
                                          />
                                          <button className="btn btn-primary" onClick={() => incrementTime(restDayMeal, setRestDayMeal)}>+</button>
                                          <button className="btn btn-secondary" onClick={() => decrementTime(restDayMeal, setRestDayMeal)}>-</button>
                                      </div>
                                  </div>
                                </div>
                              {/*Holday*/}
                                <div className="row mb-3">
                                  <div className="col-4 d-flex flex-column align-items-start">
                                            <label className="form-label">Holiday(S01) OT Rate</label>
                                            <select className="form-select form-select-solid" aria-label="Select example">
                                                <option value="" disabled selected>x0</option>
                                                <option value="1">x0.5</option>
                                                <option value="2">x1</option>
                                                <option value="3">x1.5</option>
                                                <option value="4">x2</option>
                                            </select>
                                  </div>
                                  <div className="col-4 d-flex flex-column align-items-start">
                                            <label className="form-label">Holiday(S03+S05+S06) OT Rate</label>
                                            <select className="form-select form-select-solid" aria-label="Select example">
                                                <option value="" disabled selected>x0</option>
                                                <option value="1">x0.5</option>
                                                <option value="2">x1</option>
                                                <option value="3">x1.5</option>
                                                <option value="4">x2</option>
                                            </select>
                                  </div>
                                  <div className="col-4 d-flex flex-column align-items-start">
                                          <label className="form-label">Holiday(S07) OT Rate</label>
                                          <select className="form-select form-select-solid" aria-label="Select example">
                                              <option value="" disabled selected>x0</option>
                                              <option value="1">x0.5</option>
                                              <option value="2">x1</option>
                                              <option value="3">x1.5</option>
                                              <option value="4">x2</option>
                                          </select>
                                  </div>
                                </div>

                                <hr></hr>

                                {/*Selection (Part 3)*/}
                                <div className="row mb-3">
                                  <div className="col-4">
                                    <label className="form-label">Day Type</label>
                                      <select className="form-select form-select-solid" aria-label="Select example">
                                        <option value="" disabled selected>Please select day type</option>
                                        <option value="normal">Normal</option>
                                        <option value="holiday">Holiday</option>
                                      </select>
                                    </div>

                                  <div className="col-4 d-flex flex-column align-items-start">
                                    <label className="form-label">Working Day<small> (Day)</small></label>
                                      <select className="form-select form-select-solid" aria-label="Select example">
                                        <option></option>
                                        <option value="" disabled selected>Select Your Working Day</option>
                                        <option value="d0">0.5</option>
                                        <option value="d1">1</option>
                                        <option value="d2">1.5</option>
                                        <option value="d3">2</option>
                                        <option value="d4">2.5</option>
                                        <option value="d5">3</option>
                                      </select>
                                  </div>
                                </div>

                                <hr></hr>

                                <div className="row mb-3">
                                    <div className="col-6">
                                        <label className="form-label">Rounding - Work Hour OT</label>
                                        <select className="form-select form-select-solid" aria-label="Select example">
                                            <option></option>
                                            <option value="1">Up</option>
                                            <option value="2">Down</option>
                                            <option value="3">R1</option>
                                            <option value="4">R2</option>
                                            <option value="5">R3</option>
                                            <option value="6">R4</option>
                                            <option value="7">R5</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Customized OT by Formula</label>
                                        <input type="text" className="form-control form-control-solid" />
                                    </div>
                                </div>

                                <hr className="w-100" />

                                <label className="form-label">Weekday/WeekEnd O.T - WeekEnd DateTime Range</label>
                                <div className="d-flex">
                                    <div className="me-3" style={{ width: '40%' }}>
                                        <div className="row mb-3">
                                            <div className="col-6 text-end">
                                                <label className="form-label">WeekEnd From</label>
                                            </div>
                                            <div className="col-6">
                                                <select className="form-select form-select-solid" aria-label="Select example">
                                                    <option></option>
                                                    <option value="1">Friday</option>
                                                    <option value="2">Saturday</option>
                                                    <option value="3">Sunday</option>
                                                </select>
                                                <div className="time-input-container d-flex mt-2">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-solid me-2"
                                                        placeholder="00:00:00"
                                                        value={weekEndFromTime}
                                                        onChange={(e) => handleInputChange(e, setWeekEndFromTime)}
                                                    />
                                                    <button className="btn btn-primary me-2" onClick={() => incrementTime(weekEndFromTime, setWeekEndFromTime)}>+</button>
                                                    <button className="btn btn-secondary" onClick={() => decrementTime(weekEndFromTime, setWeekEndFromTime)}>-</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: '40%' }}>
                                        <div className="row mb-3">
                                            <div className="col-6 text-end">
                                                <label className="form-label">WeekEnd To</label>
                                            </div>
                                            <div className="col-6">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-solid"
                                                    placeholder="00:00:00"
                                                    value={weekEndToTime}
                                                    onChange={(e) => handleInputChange(e, setWeekEndToTime)}
                                                />
                                                <div className="time-input-container d-flex mt-2">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-solid me-2"
                                                        placeholder="00:00:00"
                                                        value={weekEndToTime}
                                                        onChange={(e) => handleInputChange(e, setWeekEndToTime)}
                                                    />
                                                    <button className="btn btn-primary me-2" onClick={() => incrementTime(weekEndToTime, setWeekEndToTime)}>+</button>
                                                    <button className="btn btn-secondary" onClick={() => decrementTime(weekEndToTime, setWeekEndToTime)}>-</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Similar sections can be added for Holiday Eve time ranges */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MasterPage>
    );
};

export default WorkingRuleSetting;
