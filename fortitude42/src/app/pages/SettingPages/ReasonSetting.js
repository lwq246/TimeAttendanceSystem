import React from 'react';
import MasterPage from '../../modules/_layout/_default';

export function ReasonSetting() {
  return (
    <MasterPage>
    <div className="p-5">
    <div className="d-flex flex-row border">
      <div className="d-flex flex-column flex-row-fluid border p-10">
        <div className="d-flex flex-row-fluid">
          <div className="d-flex flex-row-fluid">
            <div className="col-3 d-flex flex-center flex-start">
              <div className="d-flex flex-column gap-4 flex-start">
                <input
                  type="text"
                  className="form-control form-control-solid"
                  placeholder="Branch"
                />
                <input
                  type="text"
                  className="form-control form-control-solid"
                  placeholder="Description"
                />
              </div>
            </div>
            <div className="col-9 d-flex flex-center flex-start">
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

        <div className="d-flex flex-column-fluid flex-start px-10 border-top-0">
          <table className="table table-row-dashed table-row-gray-300 gy-7">
            <thead>
              <tr className="fw-bolder fs-6 text-gray-800">
                <th style={{ textAlign: "center" }}>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>System Architect</td>
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
    </div>
    </MasterPage>
  );
}
