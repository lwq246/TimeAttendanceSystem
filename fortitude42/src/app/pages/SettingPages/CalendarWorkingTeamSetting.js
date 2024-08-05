import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import MasterPage from '../../modules/_layout/_default';
import SelectBox from "../components/SelectBox";
export function CalendarWorkingTeamSetting() {
  const patternCode = [
    { value: "option 1", label: "0900-1800" },
    { value: "option 2", label: "FlxDefault_FT" },
    { value: "option 3", label: "FlxDefault_PT" },
    { value: "option 4", label: "Nm" },
    { value: "option 5", label: "Nt" },
    { value: "option 5", label: "OFF" },
  ];

  return (
    <>
     <MasterPage>
      {/* begin::Toolbar */}
      <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    {/* begin::Toolbar container */}
                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                        {/* begin::Page title */}
                        <h2>Calander Working Team Setting</h2>
                    </div>
                </div>
        <div className="p-5">
      <ul className="nav nav-tabs nav-line-tabs mb-5 fs-6">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#kt_tab_pane_1"
          >
            General Setting
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2">
            Detail
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade active show"
          id="kt_tab_pane_1"
          role="tabpanel"
        >
          <div className="d-flex flex-row  border">
            <div className="d-flex flex-column flex-row-fluid border p-10 h-25">
              <div className="d-flex flex-row-fluid">
                <div className="d-flex flex-row-fluid">
                  <div
                    className="col-5 d-flex flex-center flex-start"
                    style={{ marginLeft: "auto" }}
                  >
                    <div
                      className=" d-flex gap-5"
                      style={{ marginLeft: "auto" }}
                    >
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
              <div className=" d-flex mt-5" style={{ height: "70vh" }}>
                <div className=" overflow-y-auto h-100 w-50 ">
                <div className="w-100 h-100 overflow-y-auto px-10 border">
                <table className="table table-row-dashed table-row-gray-300 gy-7">
                    <thead>
                      <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
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
                        <th className="text-gray-500">TEAM CODE</th>
                        <th className="text-gray-500">DESCRIPTION</th>
                        <th className="text-gray-500">PATTERN CODE</th>
                        <th className="text-gray-500">SKIP HOLIDAY</th>
                        <th className="text-gray-500">YEAR OF</th>
                        <th className="text-gray-500">START MONTH</th>
                        <th className="text-gray-500">END MONTH</th>
                        <th className="text-gray-500">START DAY</th>
                        <th className="text-gray-500" >
                  ACTIONS
                </th>
                      </tr>
                    </thead>
                    <tbody>
                      {" "}
                      <tr>
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
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                       <td> <SelectBox /></td>
                      </tr>
                      
                    </tbody>
                  </table>
                  </div>
                </div>
                <div className=" d-flex flex-column w-50 h-100">
                  <div className="  h-25 w-100">
                    <div className=" w-100 h-100 overflow-y-auto px-10 border">
                    
                    <table className="table table-row-dashed table-row-gray-300 gy-7">
                        <thead>
                          <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                            <th className="text-gray-500">SHIFT CODE</th>
                            <th className="text-gray-500">OT RULE</th>
                            <th className="text-gray-500">WORKING RULE</th>
                            <th className="text-gray-500">ALLW RULE</th>
                            <th className="text-gray-500">E. SHIFT CODE ?</th>
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
                  <div className="  h-75 w-100 p-5">
                    <div className="d-flex flex-column gap-5 flex-start w-100">
                      <div className="row col-12  align-items-center">
                      <div className="col-2">
                  <label className="form-label ">Team Code</label>
                  </div>
                <div className="col-4">
                          <input
                            type="text"
                            className="form-control form-control-solid"
                            placeholder="Team Code"
                          />
                        </div>
                      </div>
                      <div className="row col-12  align-items-center">
                      <div className="col-2">
                  <label className="form-label ">Description</label>
                  </div>
                  <div className="col-4">
                          <input
                            type="text"
                            className="form-control form-control-solid"
                            placeholder="Description"
                          />
                        </div>
                      </div>
                      <div className="row col-12  align-items-center">
                      <div className="col-2">
                  <label className="form-label ">Pattern</label>
                  </div>
                  <div className="col-4">
                        <select className="form-select form-select-solid" aria-label="Select example">
  <option>Pattern</option>
  <option value="1">0900-1800</option>
  <option value="2">FlxDefault_FT</option>
  <option value="3">FlxDefault_PT</option>
  <option value="4">Nm</option>
  <option value="5">Nt</option>
  <option value="6">OFF</option>
</select>
                        </div>
                      </div>
                      <div className="row col-12  align-items-center">
                      <div className="col-2">
                  <label className="form-label ">Year of</label>
                  </div>
                  <div className="col-4">
                          <input
                            type="number"
                            className="form-control form-control-solid"
                            min="1900"
                            max="2100"
                            placeholder="Year of"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                      <div className="row col-12  align-items-center">
                      <div className="col-2">
                  <label className="form-label ">Start Month</label>
                  </div>
                  <div className="col-4">
                          <input
                            type="number"
                            className="form-control form-control-solid"
                            min="1"
                            max="12"
                            placeholder="Start Month"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                      <div className="row col-12  align-items-center">
                      <div className="col-2">
                  <label className="form-label ">End Month</label>
                  </div>
                  <div className="col-4">
                          <input
                            type="number"
                            className="form-control form-control-solid"
                            min="1"
                            max="12"
                            placeholder="End Month"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
          <div className="d-flex flex-row  border">
            <div className="d-flex flex-column flex-row-fluid border p-10">
              <div className="d-flex flex-row-fluid">
                <div className="d-flex flex-row-fluid">
                  <div className="col-3 d-flex flex-center flex-start">
                    <div className="d-flex flex-column gap-4 flex-start">
                      <Select
                        className="react-select-styled"
                        classNamePrefix="react-select"
                        placeholder="Team Code"
                      />
                    </div>
                  </div>
                  <div className="col-9 d-flex flex-center flex-start">
                    <div
                      className=" d-flex gap-5"
                      style={{ marginLeft: "auto" }}
                    >
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
              <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#kt_tab_pane_4"
                  >
                    Calendar
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#kt_tab_pane_5"
                  >
                    Employees
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="kt_tab_pane_4"
                  role="tabpanel"
                >
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
                        <th className="text-gray-500">WEEK NO.</th>
                        <th className="text-gray-500">DATE</th>
                        <th className="text-gray-500">DAY</th>
                        <th className="text-gray-500">SHIFT CODE</th>
                        <th className="text-gray-500">DESCRIPTION</th>
                        <th className="text-gray-500">OT RULES</th>
                        <th className="text-gray-500">WORKING RULES</th>
                        <th className="text-gray-500">ALLW RULES</th>
                        <th className="text-gray-500">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td className="text-gray-500">
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
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                        <td>$320,800</td>
                       <td> <SelectBox /></td>

                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="tab-pane fade overflow-x-auto"
                  id="kt_tab_pane_5"
                  role="tabpanel"
                >
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
                        <th className="text-gray-500" >DEPARTMENT</th>
                        <th className="text-gray-500">CARDHOLDER NO.</th>
                        <th className="text-gray-500">CARD HOLDER NAME</th>
                        <th className="text-gray-500">STATUS</th>
                        <th className="text-gray-500">TEAM</th>
                        <th className="text-gray-500">RESIGNED DATE</th>
                        <th className="text-gray-500">CARD CSN</th>
                        <th className="text-gray-500">CARD TYPE</th>
                        <th className="text-gray-500">JOB TITLE</th>
                        <th className="text-gray-500">PHONE</th>
                        <th className="text-gray-500">MOBILE PHONE</th>
                        <th className="text-gray-500">JOINED DATE</th>
                        <th className="text-gray-500">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td className="text-gray-500">
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
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                        <td>$320,800</td>
                        <td> <SelectBox /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <ul className="pagination" style={{ marginLeft: "auto" }}>
                <li className="page-item previous disabled">
                  <a href="#" className="page-link">
                    <i className="previous"></i>
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    6
                  </a>
                </li>
                <li className="page-item next">
                  <a href="#" className="page-link">
                    <i className="next"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      </MasterPage>
    </>
  );
}
