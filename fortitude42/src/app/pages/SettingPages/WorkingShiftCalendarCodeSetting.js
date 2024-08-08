import { eachDayOfInterval, endOfMonth, format, startOfMonth } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import MasterPage from '../../modules/_layout/_default';
import SelectBox from "../components/SelectBox";

export function WorkingShiftCalendarCodeSetting() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const options = [
    { value: "option 1", label: "0900-1800" },
    { value: "option 2", label: "FleXiTime" },
    { value: "option 3", label: "FlxDefault_FT" },
    { value: "option 4", label: "Nm" },
    { value: "option 5", label: "Nt" },
    { value: "option 6", label: "OFF" },
  ];

  // Function to get all dates in the selected month
  const getDatesOfMonth = (date) => {
    if (!date) return [];
    return eachDayOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
    });
  };

  const datesOfMonth = selectedDate ? getDatesOfMonth(selectedDate) : [];

  // Function to render date entries in columns
  const renderDateEntries = () => {
    const columns = [];
    const numColumns = Math.ceil(datesOfMonth.length / 10);

    for (let i = 0; i < numColumns; i++) {
      const columnEntries = datesOfMonth.slice(i * 10, (i + 1) * 10);

      columns.push(
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "20px",
          }}
        >
          {columnEntries.map((date, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: "100px" }}>
                <span>{format(date, "d")}</span>
                <Select
                  className="react-select-styled w-100"
                  classNamePrefix="react-select"
                  options={options}
                  placeholder=""
                />

                <span>{format(date, "EEEE")}</span>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return columns;
  };

  return (
    <>
    <MasterPage>
      {/* begin::Toolbar */}
      <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    {/* begin::Toolbar container */}
                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                        {/* begin::Page title */}
                        <h2>Working/Shift Calander Setting</h2>
                    </div>
                </div>
    <div className="p-5">
      <div
        className="container border border-2 rounded p-5 gy-4 d-flex flex-column "
        style={{ height: "150vh", minHeight: "600px", minWidth: "1000px" }}
      >
        <div className="d-flex">
          <div
            className=" d-flex flex-column"
            style={{ height: "100%", width: "50%" }}
          >
            <div className="d-flex mb-5 row w-100">
              <div className="col-4">
                <h2>Calendar Code </h2>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control form-control-solid  "
                ></input>
              </div>
            </div>
            <div className="d-flex">
              <div className="col-4">
                <h2>Date </h2>
              </div>
              <div className="col-6">
                <DatePicker
                  className="form-control form-control-solid "
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="yyyy/MM"
                  showMonthYearPicker
                />
              </div>
            </div>
            <h2 className="mt-5">Working Shift</h2>
            <div className=" d-flex" style={{}}>
              {renderDateEntries()}
            </div>
          </div>
          <div style={{ width: "50%", height: "100%", overflowY: "auto" }}>
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
                        <th className="text-gray-500">YEAR</th>
                        <th className="text-gray-500">MONTH</th>
                        <th className="text-gray-500">CODE</th>
                       
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
                       <td> <SelectBox /></td>
                      </tr>
                      
                    </tbody>
                  </table>
                  </div>
          </div>
        </div>
        <div
          className=" p-1 container mt-4 row d-flex justify-content-between"
          style={{ height: "10%" }}
        >
          <button
            className="col-3 h-75 rounded border-0 bg-primary"
            style={{ color: "#fff" }}
          >
            Cancel
          </button>
          <button
            className="col-3 h-75 rounded border-0 bg-primary"
            style={{ color: "#fff" }}
          >
            Save
          </button>
          <button
            className="col-3 h-75 rounded border-0 bg-primary"
            style={{ color: "#fff" }}
          >
            Auto Generate(Shift Pattern)
          </button>
        </div>
      </div>
      </div>
      </MasterPage>
    </>
  );
}
