import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import MasterPage from '../../modules/_layout/_default';

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
                  <table className="table table-rounded table-row-bordered border gy-7 gs-7">
                    <thead>
                      <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                        <th>Team Code</th>
                        <th>Description</th>
                        <th>Pattern Code</th>
                        <th>Skip Holiday</th>
                        <th>Year Of</th>
                        <th>Start Month</th>
                        <th>End Month</th>
                        <th>Start Day</th>
                      </tr>
                    </thead>
                    <tbody>
                      {" "}
                      <tr>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                      </tr>
                      <tr>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                      </tr>
                      <tr>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                      </tr>
                      <tr>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                      </tr>
                      <tr>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                      </tr>
                      <tr>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                      </tr>
                      <tr>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                      </tr>
                      <tr>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                      </tr>
                      <tr>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                        <td>Hahaha</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className=" d-flex flex-column w-50 h-100">
                  <div className="  h-25 w-100">
                    <div className=" w-100 h-100 overflow-y-auto">
                      <table className="table table-rounded table-row-bordered border gy-7 gs-7">
                        <thead>
                          <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                            <th>Shift Code</th>
                            <th>OT Rule</th>
                            <th>Working Rule</th>
                            <th>Allw Rule</th>
                            <th>E. Shift Code ?</th>
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
                    <div className="d-flex flex-column gap-5 flex-start">
                      <div className="row col-12">
                        <div className="col-5">
                          <input
                            type="text"
                            className="form-control form-control-solid"
                            placeholder="Team Code"
                          />
                        </div>
                      </div>
                      <div className="row col-12">
                        <div className="col-5">
                          <input
                            type="text"
                            className="form-control form-control-solid"
                            placeholder="Description"
                          />
                        </div>
                      </div>
                      <div className="row col-12">
                        <div className="col-5">
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
                      <div className="row col-12">
                        <div className="col-5">
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
                      <div className="row col-12">
                        <div className="col-5">
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
                      <div className="row col-12">
                        <div className="col-5">
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
                        <th style={{ width: "20%" }}>Week No.</th>
                        <th style={{ width: "15%" }}>Date</th>
                        <th style={{ width: "15%" }}>Day</th>
                        <th style={{ width: "15%" }}>Shift Code</th>
                        <th style={{ width: "20%" }}>Description</th>
                        <th style={{ width: "10%" }}>OT Rules</th>
                        <th style={{ width: "10%" }}>Working Rules</th>
                        <th style={{ width: "10%" }}>Allw Rules</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                        <td>$320,800</td>
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
                        <th>Department</th>
                        <th>Cardholder No.</th>
                        <th>Card Holder Name</th>
                        <th>Status</th>
                        <th>Team</th>
                        <th>Resigned Date</th>
                        <th>Card CSN</th>
                        <th>Card Type</th>
                        <th>Job Title</th>
                        <th>Phone</th>
                        <th>Mobile Phone</th>
                        <th>Joined Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                        <td>$320,800</td>
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
