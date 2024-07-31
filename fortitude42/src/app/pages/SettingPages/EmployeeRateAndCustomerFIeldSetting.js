import React from 'react';
import MasterPage from '../../modules/_layout/_default';

export function EmployeeRateAndCustomFieldsSetting() {
  const labels = [
    "CustBoolean1",
    "CustBoolean2",
    "CustBoolean3",
    "CustInt1",
    "CustInt2",
    "CustInt3",
    "CustStr1",
    "CustStr2",
    "CustStr3",
    "CustStr4",
    "CustStr5",
    "CustDate1",
    "CustDate2",
    "CustDate3",
    "CustNum1",
    "CustNum2",
    "CustNum3",
    "CustCode1",
    "CustCode2",
    "CustCode3",
    "CustCode4",
    "CustCode5",
  ];

  const renderInputFields = (startIndex, count) => {
    let fields = [];
    for (let i = 0; i < count; i++) {
      const index = startIndex + i;
      fields.push(
        <div
          key={index}
          className="mb-2 d-flex items-center col-12 row align-items-center justify-content-center"
        >
          <label className="mr-2 col-4">{labels[index]}:</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded w-full col-4"
            placeholder={labels[index]}
          />
        </div>
      );
    }
    return fields;
  };

  return (
    <MasterPage>
    <div className="d-flex flex-row  border">
      <div className="d-flex flex-column flex-row-fluid border p-10">
        <ul className="nav nav-tabs nav-line-tabs mb-5 fs-6">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-bs-toggle="tab"
              href="#kt_tab_pane_1"
            >
              Rate 1-7
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2">
              Rate 7-12
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_3">
              Custom FIelds
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade active show"
            id="kt_tab_pane_1"
            role="tabpanel"
          >
            <div className="d-flex flex-row-fluid">
              <div className="d-flex flex-row-fluid">
                <div className="col-3 d-flex flex-center flex-start">
                  <div className="d-flex flex-column gap-4 flex-start">
                    <input
                      type="text"
                      className="form-control form-control-solid"
                      placeholder="Branch"
                    />
                  </div>
                </div>
                <div className="col-9 d-flex flex-center flex-start">
                  <div className=" d-flex gap-5" style={{ marginLeft: "auto" }}>
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
            <table className="table table-row-dashed table-row-gray-300 gy-7">
              <thead>
                <tr className="fw-bolder fs-6 text-gray-800">
                  <th style={{ textAlign: "center" }}>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>System Architect</td>
                </tr>
              </tbody>
            </table>
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
          <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
            <div className="d-flex flex-row-fluid">
              <div className="d-flex flex-row-fluid">
                <div className="col-3 d-flex flex-center flex-start">
                  <div className="d-flex flex-column gap-4 flex-start">
                    <input
                      type="text"
                      className="form-control form-control-solid"
                      placeholder="Branch"
                    />
                  </div>
                </div>
                <div className="col-9 d-flex flex-center flex-start">
                  <div className=" d-flex gap-5" style={{ marginLeft: "auto" }}>
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
            <table className="table table-row-dashed table-row-gray-300 gy-7">
              <thead>
                <tr className="fw-bolder fs-6 text-gray-800">
                  <th style={{ textAlign: "center" }}>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>System Architect</td>
                </tr>
              </tbody>
            </table>

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
          <div className="tab-pane fade " id="kt_tab_pane_3" role="tabpanel">
            <div className=" row w-100">
              <div className="col-6 flex-row">{renderInputFields(0, 11)}</div>
              <div className="col-6 flex-column justify-content-start align-content-center">
                {renderInputFields(11, 11)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </MasterPage>
  );
}
