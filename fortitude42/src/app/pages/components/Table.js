import React, { Component } from 'react';
import SelectBox from './SelectBox';

class Table extends Component {
    handleHeaderCheckboxChange = (e) => {
        const checked = e.target.checked;
        this.props.onHeaderCheckboxChange(checked);
    };

    handleCheckboxChange = (index) => {
        this.props.onCheckboxChange(index);
    };

    render() {
        const { headers, data, isAllChecked, checkedDepartments } = this.props;

        return (
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
                                        checked={isAllChecked}
                                        onChange={this.handleHeaderCheckboxChange}
                                    />
                                </div>
                            </th>
                            {headers.map((header, index) => (
                                <th key={index} className="text-gray-500" style={{ width: header.width }}>
                                    {header.label}
                                </th>

                            ))}
                             <th className="text-gray-500" style={{ width: '10%' }}>
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td>
                                    <div className="form-check form-check-custom form-check-solid">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="flexCheckDefault"
                                            checked={checkedDepartments[rowIndex]}
                                            onChange={() => this.handleCheckboxChange(rowIndex)}
                                        />
                                    </div>
                                </td>
                                {headers.map((header, colIndex) => (
                                    <td key={colIndex}>{row[header.key]}</td>
                                ))}
                                <td>
                                    <SelectBox />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
