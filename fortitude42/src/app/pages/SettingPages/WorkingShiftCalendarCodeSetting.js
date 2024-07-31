import { eachDayOfInterval, endOfMonth, format, startOfMonth } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import MasterPage from '../../modules/_layout/_default';


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
    <div className="p-5">
      <h1>Working/Shift Calendar Code Setting</h1>
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
            <table
              className="table table-striped table-bordered h-100"
              style={{ width: "100%" }}
            >
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Month</th>
                  <th scope="col">Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>John</td>
                  <td>Doe</td>
                </tr>
              </tbody>
            </table>
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
