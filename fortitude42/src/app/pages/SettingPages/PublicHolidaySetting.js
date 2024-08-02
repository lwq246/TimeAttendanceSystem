import { DatePicker } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import "rsuite/DateRangePicker/styles/index.css";
import MasterPage from '../../modules/_layout/_default';
import SelectBox from '../components/SelectBox';

const { RangePicker } = DatePicker;

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const  PublicHolidaySetting = () => {
  return (
    <MasterPage>
      {/* begin::Toolbar */}
      <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    {/* begin::Toolbar container */}
                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                        {/* begin::Page title */}
                        <h2>Public Holiday Setting</h2>
                    </div>
                </div>
    <div className="d-flex flex-row border">
      <div className="d-flex flex-column flex-row-fluid border p-10">
        <div className="d-flex flex-row-fluid">
          <div className="d-flex flex-row-fluid">
            <div className="col-3 d-flex flex-center flex-start">
              <div className="d-flex flex-column flex-start gap-5">
                <input
                  type="text"
                  className="form-control form-control-solid"
                  placeholder="Holiday"
                />
                <DatePicker
                  onChange={onChange}
                  className="form-control form-control-solid"
                  placeholder="Date"
                />
                <select
                  className="form-select form-select-solid"
                  aria-label="Select example"
                >
                  <option>Country ID</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <RangePicker className="form-control form-control-solid w-100" />
              </div>
            </div>
            <div className="col-4 row">
              <div className="col-4">
                <div className="form-check form-check-custom form-check-solid me-10">
                  <input
                    className="form-check-input h-30px w-30px mt-2"
                    type="checkbox"
                    id="flexCheckbox30"
                  />
                  <label className="form-check-label">Show All</label>
                </div>
              </div>
              <div className="col-4">
                <div className="form-check form-check-custom form-check-solid me-10">
                  <input
                    className="form-check-input h-30px w-30px mt-2"
                    type="checkbox"
                    id="flexCheckbox31"
                  />
                  <label className="form-check-label">Show Upcoming</label>
                </div>
              </div>

              <div className="mt-auto">
                <div className="form-check form-check-custom form-check-solid me-10">
                  <input
                    className="form-check-input h-30px w-30px mt-2"
                    type="checkbox"
                    id="flexCheckbox32"
                  />
                  <label className="form-check-label">
                    OT Rules WkDay/WkEnd Holiday Eve
                  </label>
                </div>
              </div>
            </div>
            <div className="col-5 d-flex flex-center flex-start">
              <div
                className="d-flex gap-5 flex-start"
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

        <div className="d-flex flex-column-fluid flex-start px-10 border-top-0">
          <table className="table table-row-dashed table-row-gray-300 gy-7">
            <thead>
              <tr className="fw-bolder fs-6 text-gray-800">
                <th>
                  <div className="form-check form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                  </div>
                </th>
                <th className="text-gray-500" style={{ width: "20%" }}>
                  DATE
                </th>
                <th className="text-gray-500" style={{ width: "20%" }}>
                  HOLIDAY
                </th>
                <th className="text-gray-500" style={{ width: "25%" }}>
                  EVE
                </th>
                <th className="text-gray-500" style={{ width: "25%" }}>
                  COUNTRY ID
                </th>
                <th className="text-gray-500" style={{ width: "10%" }}>
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
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
                <td>System Architect</td>
                <td>System Architect</td>
                <td>System Architect</td>
                <td>System Architect</td>

                <td>
                  <SelectBox />
                </td>
              </tr>
            </tbody>
          </table>
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
            </MasterPage>
  );
}

export default PublicHolidaySetting;
