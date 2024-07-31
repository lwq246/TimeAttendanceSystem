import React, { useState } from 'react';
import { useAuth } from '../../auth/core/AuthProvider';
//Master Layout
import MasterPage from '../../modules/_layout/_default';
import ButtonGroup from '../components/ButtonGroup';
const OvertimeRuleSetting = () => {
    const { logout } = useAuth();
    const [time, setTime] = useState('00:00:00');

    const [weekEndFromTime, setWeekEndFromTime] = useState('00:00:00');
    const [weekEndToTime, setWeekEndToTime] = useState('00:00:00');
    const [holidayEveFromTime, setHolidayEveFromTime] = useState('00:00:00');
    const [holidayEveToTime, setHolidayEveToTime] = useState('00:00:00');

    const pad = (num) => num.toString().padStart(2, '0');

    const incrementTime = (time, setTime) => {
      let [hours, minutes, seconds] = time.split(':').map(Number);

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

      setTime(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
  };

  const decrementTime = (time, setTime) => {
      let [hours, minutes, seconds] = time.split(':').map(Number);

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

      setTime(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
  };

  const handleInputChange = (e, setTime) => {
      const value = e.target.value;
      const timePattern = /^([0-1]?[0-9]|2[0-3]):([0-5]?[0-9]):([0-5]?[0-9])$/;
      if (timePattern.test(value)) {
          setTime(value);
      }
  };
    return (
        <MasterPage>
            <div className="d-flex flex-column flex-column-fluid p-4" >

                {/* begin::Toolbar */}
                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    {/* begin::Toolbar container */}
                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                        {/* begin::Page title */}
                        <h2>Overtime Rule Setting</h2>
                    </div>
                </div>

                <div className="d-flex flex-row  border">
      <div className="d-flex flex-column flex-row-fluid border p-10 h-25">
        <div className="d-flex flex-row-fluid">
          <div className="d-flex flex-row-fluid">
           <ButtonGroup/>


          </div>
        </div>
        <div className=" d-flex mt-5" style={{ height: "150vh" }}>
          <div className=" overflow-y-auto h-100 w-25 ">
            <table className="table table-rounded table-row-bordered border gy-7 gs-7">
              <thead>
                <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                  <th>Code</th>
                
                </tr>
              </thead>
              <tbody>
                {" "}
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
                <tr>
                  <td>Hahaha</td>
                  
                </tr>
               
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-column w-75 h-100  align-items-start p-3">
          <div className=' d-flex flex-row w-100 align-items-center justify-content-center row'>
          <label className="form-label col-2 ">Code</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-solid w-50 col-4"
                                            placeholder="Code"
                                        />

          </div>
          <div className=' d-flex flex-row w-100 align-items-center justify-content-center mt-3 row'>
          <label className="form-label col-2">Description</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-solid w-50 col-4"
                                            placeholder="Description"
                                        />

          </div>
          <div className='w-100 d-flex'>
            <div className='w-50 p-1'>
                <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
   </div>
            <label className="form-label col-6 ">Min Total O.T Hours Per Month </label>
            <div className='col-1'></div>
            <div className="col-4">
                          <input
                            type="number"
                            className="form-control form-control-solid"
                        
                            style={{ width: "100%" }}
                          />
                        </div>
            </div>
                <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
   </div>
            <label className="form-label col-6 ">Min O.T Hours Per Month (S05) </label>
            <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
   </div>
            <div className="col-4">
                          <input
                            type="number"
                            className="form-control form-control-solid"
                        
                            style={{ width: "100%" }}
                          />
                        </div>
            </div>
                <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
   </div>
            <label className="form-label col-6 ">Min O.T Hours Per Month (S06) </label>
            <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
     </div>
            <div className="col-4">
                          <input
                            type="number"
                            className="form-control form-control-solid"
                        
                            style={{ width: "100%" }}
                          />
                        </div>
            </div>
                <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
   </div>
            <label className="form-label col-6 ">Min O.T Hours Per Month (S07) </label>
            <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
     </div>
            <div className="col-4">
                          <input
                            type="number"
                            className="form-control form-control-solid"
                        
                            style={{ width: "100%" }}
                          />
                        </div>
            </div>
                <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
   </div>
            <label className="form-label col-6 ">Min O.T Hours Per Month (S01) </label>
            <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
     </div>
            <div className="col-4">
                          <input
                            type="number"
                            className="form-control form-control-solid"
                        
                            style={{ width: "100%" }}
                          />
                        </div>
            </div>
</div>
            <div className='w-50 p-1'>
                <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
   </div>
            <label className="form-label col-6 ">Max Total O.T Hours Per Month </label>
            <div className='col-1'></div>
            <div className="col-4">
                          <input
                            type="number"
                            className="form-control form-control-solid"
                        
                            style={{ width: "100%" }}
                          />
                        </div>
            </div>
                <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
   </div>
            <label className="form-label col-6 ">Max O.T Hours Per Month (S05) </label>
            <div className='col-1'></div>
            <div className="col-4">
                          <input
                            type="number"
                            className="form-control form-control-solid"
                        
                            style={{ width: "100%" }}
                          />
                        </div>
            </div>
                <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
   </div>
            <label className="form-label col-6 ">Max O.T Hours Per Month (S06) </label>
            <div className='col-1'></div>
            <div className="col-4">
                          <input
                            type="number"
                            className="form-control form-control-solid"
                        
                            style={{ width: "100%" }}
                          />
                        </div>
            </div>
                <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
   </div>
            <label className="form-label col-6 ">Max O.T Hours Per Month (S07) </label>
            <div className='col-1'></div>
            <div className="col-4">
                          <input
                            type="number"
                            className="form-control form-control-solid"
                        
                            style={{ width: "100%" }}
                          />
                        </div>
            </div>
                <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
   </div>
            <label className="form-label col-6 ">Max O.T Hours Per Month (S01) </label>
          
     
            <div className='col-1'></div>
    
            <div className="col-4">
                          <input
                            type="number"
                            className="form-control form-control-solid"
                        
                            style={{ width: "100%" }}
                          />
                        </div>
            </div>
</div>


          </div>
          <hr className="w-100" />
          <div className='w-75'>
               
          <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'>
     
         
   </div>
            <label className="form-label col-4 ">Min Daily Late Out Meal OT (S03) </label>
          
     
          
    
            <div className="col-3">
                          <input
                            type="number"
                            className="form-control form-control-solid"
                        
                            style={{ width: "100%" }}
                          />

                        </div>
                        <label className="form-label col-4 ">(Minute)</label>
                        
            </div>
                <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'>
     
         
   </div>
            <label className="form-label col-4 ">Min Daily Early In Meal OT (S03) </label>
          
     
          
    
            <div className="col-3">
                          <input
                            type="number"
                            className="form-control form-control-solid"
                        
                            style={{ width: "100%" }}
                          />

                        </div>
                        <label className="form-label col-4 ">(Minute)</label>
                        
            </div>
</div>
<hr className="w-100" />
<div className="w-100 d-flex">
  <div className='w-75'>
               
               <div className='row d-flex align-items-center mb-3'>
                         <div className='col-1'>
          
              
        </div>
                 <label className="form-label col-4 ">O.T Auto Deduct </label>
               
          
               
         
                 <div className="col-3">
                               <input
                                 type="number"
                                 className="form-control form-control-solid"
                             
                                 style={{ width: "100%" }}
                               />
     
                             </div>
                             <label className="form-label col-4 ">(Minute)</label>
                             
                 </div>
                     <div className='row d-flex align-items-center mb-3'>
                         <div className='col-1'>
          
              
        </div>
                 <label className="form-label col-4 ">Conditions O.T </label>
               
          
               
         
                 <div className="col-3">
                               <input
                                 type="number"
                                 className="form-control form-control-solid"
                             
                                 style={{ width: "100%" }}
                               />
     
                             </div>
                             <label className="form-label col-4 ">(Minute)</label>
                             
                 </div>
     </div>
     <div className='p-2 w-25 border d-flex flex-column g-3'>
      <div className=' d-flex align-items-center '>
     <label className="form-label col-4 ">O.T Auto Deduct </label>
     <select className="form-select form-select-solid w-75" aria-label="Select example">
        <option></option>
        <option value="1">1X</option>
        <option value="2">1.5X</option>
        <option value="3">2X</option>
        <option value="4">2.5X</option>
        <option value="5">3X</option>
        <option value="6">Flat</option>
    </select>
     </div>
     <div className="form-check form-check-custom form-check-solid me-10 g-2">
      <input className="form-check-input h-29px w-29px" type="checkbox" value="" id="flexCheckbox30"/>
      <label className="form-label" for="flexCheckbox30 ">
          Add iOT to iDetail Hours
      </label>
  </div>
     </div>
     </div>
     <hr className="w-100" />
     <div className='w-100 d-flex'>
            <div className='w-50 p-1'>
                <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
   </div>
            <label className="form-label col-11 ">Deduct Late-In(S01/S03 Over Grace Period)</label>
            
            </div>
                <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
   </div>
            <label className="form-label col-10 ">Absorb Grace Time(Late-In/Early-Out) </label>
         
           
            </div>
                
</div>
            <div className='w-50 p-1'>
                <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'>
     
         
   </div>
   <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
     </div>
            <label className="form-label col-10 ">Deduct Early-Out(S01/S03 Over Grace Period) </label>
            
            </div>
        
</div>



       

          
          </div>
          <hr className="w-100" />
          <div className='w-100 d-flex'>
            <div className='w-50 p-1 '>
            <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
   </div>
            <label className="form-label col-6 ">Rounding - Work Hour OT </label>
          
            <div className="col-5">
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
            </div>
            <div className='row d-flex align-items-center mb-3'>
                    <div className='col-1'><input className="form-check-input h-20px w-20px" type="checkbox" value="" id="flexCheckbox30"/>
     
         
   </div>
            <label className="form-label col-6 ">Customized OT by Formula </label>
          
           
                      
            </div>
                
                
</div>
          </div>
          <hr className="w-100" />
          <label className="form-label col-6 ">Weekday/WeekEnd O.T - WeekEnd DateTime Range</label>
          <div className='w-100 d-flex'>
          <div className='' style={{width:"40%"}}>
      <div className='d-flex row align-items-center'>
        <div className='col-3 text-end'>
          <label className="form-label">WeekEnd From</label>
          
        </div>
        <div className='col-4'>
        <select className="form-select form-select-solid" aria-label="Select example">
  <option></option>
  <option value="1">Friday</option>
  <option value="2">Saturday</option>
  <option value="3">Sunday</option>
</select>

        </div>
        <div className="col-5">
       <div className="time-input-container d-flex">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-solid w-75"
                                                    value={weekEndFromTime}
                                                    onChange={(e) => handleInputChange(e, setWeekEndFromTime)}
                                                    placeholder="hh:mm:ss"
                                                />
                                                <div className="time-input-buttons w-25">
                                                    <button onClick={() => incrementTime(weekEndFromTime, setWeekEndFromTime)}>▲</button>
                                                    <button onClick={() => decrementTime(weekEndFromTime, setWeekEndFromTime)}>▼</button>
                                                </div>
                                            </div>
                        </div>
      </div>
      <div className='d-flex row align-items-center'>
        <div className='col-3 text-end'>
          <label className="form-label">To</label>
          
        </div>
        <div className='col-4'>
        <select className="form-select form-select-solid" aria-label="Select example">
        <option></option>
  <option value="1">Friday</option>
  <option value="2">Saturday</option>
  <option value="3">Sunday</option>
</select>

        </div>
        <div className="col-5">
        <div className="time-input-container d-flex">
        <div className="time-input-container d-flex">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-solid w-75"
                                                    value={weekEndToTime}
                                                    onChange={(e) => handleInputChange(e, setWeekEndToTime)}
                                                    placeholder="hh:mm:ss"
                                                />
                                                <div className="time-input-buttons w-25">
                                                    <button onClick={() => incrementTime(weekEndToTime, setWeekEndToTime)}>▲</button>
                                                    <button onClick={() => decrementTime(weekEndToTime, setWeekEndToTime)}>▼</button>
                                                </div>
                                            </div>
    </div>
                        </div>
      </div>
               
          
</div>
<div style={{width:"30%"}}>
<div className='d-flex row align-items-center'>
        <div className='col-4 text-end'>
          <label className="form-label">Holiday Eve From</label>
          
        </div>
        
        <div className="col-8">
        <div className="time-input-container d-flex">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-solid w-75"
                                                    value={holidayEveFromTime}
                                                    onChange={(e) => handleInputChange(e, setHolidayEveFromTime)}
                                                    placeholder="hh:mm:ss"
                                                />
                                                <div className="time-input-buttons w-25">
                                                    <button onClick={() => incrementTime(holidayEveFromTime, setHolidayEveFromTime)}>▲</button>
                                                    <button onClick={() => decrementTime(holidayEveFromTime, setHolidayEveFromTime)}>▼</button>
                                                </div>
                                            </div>
                        </div>
      </div>
      <div className='d-flex row align-items-center'>
        <div className='col-4 text-end'>
          <label className="form-label">To</label>
          
        </div>
      
        <div className="col-8">
       <div className="time-input-container d-flex">
       <div className="time-input-container d-flex">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-solid w-75"
                                                    value={holidayEveToTime}
                                                    onChange={(e) => handleInputChange(e, setHolidayEveToTime)}
                                                    placeholder="hh:mm:ss"
                                                />
                                                <div className="time-input-buttons w-25">
                                                    <button onClick={() => incrementTime(holidayEveToTime, setHolidayEveToTime)}>▲</button>
                                                    <button onClick={() => decrementTime(holidayEveToTime, setHolidayEveToTime)}>▼</button>
                                                </div>
                                            </div>
    </div>
                        </div>
      </div>
</div>
<div style={{width:"30%"}}>
<div className='d-flex row align-items-center'>
        <div className='col-4 text-end'>
          <label className="form-label">Eve Rate</label>
          
        </div>
        
        <div className='col-8'>
        <select className="form-select form-select-solid" aria-label="Select example">
        <option></option>
  <option value="1">Holiday</option>
  
</select>
        </div>
      </div>
      
</div>
</div>
        </div>
      </div>
    </div>
</div>
            
           </div>
        </MasterPage>
    );
};

export default OvertimeRuleSetting;
