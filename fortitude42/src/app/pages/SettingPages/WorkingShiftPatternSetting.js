import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import Select, { components } from "react-select";
import MasterPage from '../../modules/_layout/_default';
import SelectBox from "../components/SelectBox";
export function WorkingShiftPatternSetting() {
  const shiftCode = [
    { value: "option 1", label: "0900-1800" },
    { value: "option 2", label: "FlxDefault_FT" },
    { value: "option 3", label: "FlxDefault_PT" },
    { value: "option 4", label: "Nm" },
    { value: "option 5", label: "Nt" },
    { value: "option 6", label: "OFF" },
  ];

  const OT = [
    {
      code: "OT",
      description: "Overtime rules",
      value: "OT",
      label: "OT",
    },
  ];

  const CustomOTOption = (props) => {
    return (
      <components.Option {...props}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{props.data.code}</span>
          <span>{props.data.description}</span>
        </div>
      </components.Option>
    );
  };

  const WR = [
    {
      code: "H",
      description: "Half Day",
      value: "H",
      label: "H",
    },
    {
      code: "N",
      description: "Normal Day",
      value: "N",
      label: "N",
    },
    {
      code: "R",
      description: "Rest Day",
      value: "R",
      label: "R",
    },
    {
      code: "O",
      description: "Off Day",
      value: "O",
      label: "O",
    },
  ];

  const CustomWROption = (props) => {
    return (
      <components.Option {...props}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{props.data.code}</span>
          <span>{props.data.description}</span>
        </div>
      </components.Option>
    );
  };

  const Allw = [
    {
      code: "Allw",
      description: "Standard",
      value: "Allw",
      label: "Allw",
    },
  ];

  const CustomAllwOption = (props) => {
    return (
      <components.Option {...props}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{props.data.code}</span>
          <span>{props.data.description}</span>
        </div>
      </components.Option>
    );
  };

  const CustomMenu = (props) => {
    return (
      <components.Menu {...props}>
        <div
          style={{
            padding: "8px",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <span>Code</span>
          <span>Description</span>
        </div>
        {props.children}
      </components.Menu>
    );
  };

  const CustomMenuList = (props) => {
    return (
      <components.MenuList {...props}>{props.children}</components.MenuList>
    );
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      borderColor: '#9FA6B2',  // Color from the screenshot
      color: '#9FA6B2',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#9FA6B2',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#9FA6B2',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#9FA6B2',
    }),
  };
  return (
    <MasterPage>
      <div className="d-flex flex-column flex-column-fluid p-4">
      {/* begin::Toolbar */}
      <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    {/* begin::Toolbar container */}
                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                        {/* begin::Page title */}
                        <h2>Working/Shift Pattern Setting</h2>
                    </div>
                </div>
    <div className="d-flex flex-row">
      <div className="d-flex flex-column flex-row-fluid border p-10 h-25">
        <div className="d-flex flex-row-fluid">
          <div className="d-flex flex-row-fluid">
            <div
              className="col-5 d-flex flex-center flex-start"
              style={{ marginLeft: "auto" }}
            >
              <div className="d-flex gap-5" style={{ marginLeft: "auto" }}>
                <a href="#" className="btn btn-light-primary ml-3">
                  <i className="bi bi-filter"></i>
                  Filter
                </a>
                <a href="#" className="btn btn-light-primary">
                  <i className="bi bi-box-arrow-in-up"></i>
                  Export
                </a>
                <a href="#" className="btn btn-primary">
                  <i className="bi bi-person-add"></i>
                  New
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-5" style={{ height: "70vh" }}>
          <div className="overflow-y-auto h-100 w-50 border px-10">
          <table className="table table-row-dashed table-row-gray-300 gy-7">
      <thead>
          <tr className="fw-bolder fs-6 text-gray-800">
          <th className="text-gray-500">
                  <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </th>
          <th className="text-gray-500">PATTERN CODE</th>
                  <th className="text-gray-500">TYPE</th>
                  <th className="text-gray-500">DESCRIPTION</th>
                  <th className="text-gray-500" >
                  ACTIONS
                </th>
          </tr>
      </thead>
      <tbody>
          <tr>
            <td>
          <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  </td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>Edinburgh</td>
              <td>
                  <SelectBox />
                </td>
          </tr>
          <tr>
            <td>
          <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  </td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>Edinburgh</td>
              <td>
                  <SelectBox />
                </td>
          </tr>
          <tr>
            <td>
          <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  </td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>Edinburgh</td>
              <td>
                  <SelectBox />
                </td>
          </tr>
          <tr>
            <td>
          <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  </td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>Edinburgh</td>
              <td>
                  <SelectBox />
                </td>
          </tr>
          <tr>
            <td>
          <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  </td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>Edinburgh</td>
              <td>
                  <SelectBox />
                </td>
          </tr>
          <tr>
            <td>
          <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  </td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>Edinburgh</td>
              <td>
                  <SelectBox />
                </td>
          </tr>
          <tr>
            <td>
          <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  </td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>Edinburgh</td>
              <td>
                  <SelectBox />
                </td>
          </tr>
          <tr>
            <td>
          <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  </td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>Edinburgh</td>
              <td>
                  <SelectBox />
                </td>
          </tr>
          <tr>
            <td>
          <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  </td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>Edinburgh</td>
              <td>
                  <SelectBox />
                </td>
          </tr>
          <tr>
            <td>
          <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  </td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>Edinburgh</td>
              <td>
                  <SelectBox />
                </td>
          </tr>
          <tr>
            <td>
          <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  </td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>Edinburgh</td>
              <td>
                  <SelectBox />
                </td>
          </tr>
          <tr>
            <td>
          <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  </td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>Edinburgh</td>
              <td>
                  <SelectBox />
                </td>
          </tr>
          <tr>
            <td>
          <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  </td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>Edinburgh</td>
              <td>
                  <SelectBox />
                </td>
          </tr>
          <tr>
            <td>
          <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  </td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>Edinburgh</td>
              <td>
                  <SelectBox />
                </td>
          </tr>
          
      </tbody>
  </table>
          </div>
          <div className="d-flex flex-column w-50 h-100">
            <div className="h-25 w-100">
              <div className="w-100 h-100 overflow-y-auto px-10 border">
              <table className="table table-row-dashed table-row-gray-300 gy-7">
                  <thead>
                    <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                      <th className="text-gray-500">SHIFT CODE</th>
                      <th className="text-gray-500">OT RULE</th>
                      <th className="text-gray-500">WORKING RULE</th>
                      <th className="text-gray-500">ALLW RULE</th>
                      <th className="text-gray-500">E. SHIIFT CODE?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                    </tr>
                    <tr>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                    </tr>
                    <tr>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                    </tr>
                    <tr>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                    </tr>
                    <tr>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                      <td>Hahaha</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="h-75 w-100 p-5">
              <div className="d-flex flex-column gap-5 flex-start w-100">
                <div className="row col-12 align-items-center">
                <div className="col-2">
                  <label className="form-label ">Day</label>
                  </div>
                <div className="col-4">
                                        <input
                                            type="text"
                                            className="form-control form-control-solid"
                                            placeholder="Day"
                                        />
                </div>
                                        
                </div>
                <div className="row col-12 align-items-center">
                <div className="col-2">
                  <label className="form-label ">Weekday</label>
                  </div>
                <div className="col-4">
                                        <input
                                            type="text"
                                            className="form-control form-control-solid"
                                            placeholder="Weekday"
                                        />
                </div>
                                        
                </div>
               
                <div className="row col-12 align-items-center">
                <div className="col-2">
                  <label className="form-label ">Shift Code</label>
                  </div>
                  <div className="col-4">
                    <Select
                      className="react-select-styled"
                      classNamePrefix="react-select"
                      options={shiftCode}
                      placeholder="Shift Code"
                    />
                  </div>
                  <div className="col-1">
                    <input
                      className="form-check-input h-30px w-30px mt-2"
                      type="checkbox"
                      value=""
                      id="flexCheckbox30"
                    />
                    <label className="form-check-label"></label>
                  </div>
                  <div className="col-4">
                    <a href="#" className="btn btn-secondary">
                      Copy to All
                    </a>
                  </div>
                </div>
                <div className="row col-12 align-items-center">
                <div className="col-2">
                  <label className="form-label ">Overtime Rule</label>
                  </div>
                  <div className="col-4">
                    <Select
                      className="react-select-styled"
                      classNamePrefix="react-select"
                      options={OT}
                      placeholder="Overtime Rule"
                      components={{
                        Option: CustomOTOption,
                        Menu: CustomMenu,
                        MenuList: CustomMenuList,
                      }}
                    />
                  </div>
                  <div className="col-1"></div>
                  <div className="col-4">
                    <a href="#" className="btn btn-secondary">
                      Copy to All
                    </a>
                  </div>
                </div>
                <div className="row col-12 align-items-center">
                <div className="col-2">
                  <label className="form-label ">Working Rule</label>
                  </div>
                  <div className="col-4">
                    <Select
                      className="react-select-styled"
                      classNamePrefix="react-select"
                      options={WR}
                      placeholder="Working Rule"
                      components={{
                        Option: CustomWROption,
                        Menu: CustomMenu,
                        MenuList: CustomMenuList,
                      }}
                    />
                  </div>
                  <div className="col-1"></div>
                  <div className="col-4">
                    <a href="#" className="btn btn-secondary">
                      Copy to All
                    </a>
                  </div>
                </div>
                <div className="row col-12 align-items-center">
                <div className="col-2">
                  <label className="form-label ">Allowance Rule</label>
                  </div>
                  <div className="col-4">
                    <Select
                      className="react-select-styled"
                      classNamePrefix="react-select"
                      options={Allw}
                      placeholder="Allowance Rule"
                      components={{
                        Option: CustomAllwOption,
                        Menu: CustomMenu,
                        MenuList: CustomMenuList,
                      }}
                    />
                  </div>
                  <div className="col-1"></div>
                  <div className="col-4">
                    <a href="#" className="btn btn-secondary">
                      Copy to All
                    </a>
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
}
