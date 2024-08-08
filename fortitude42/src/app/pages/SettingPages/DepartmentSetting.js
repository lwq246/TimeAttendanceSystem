import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../auth/core/AuthProvider';
// Master Layout
import MasterPage from '../../modules/_layout/_default';
import ButtonGroup from '../components/ButtonGroup';
import Table from '../components/Table';


const DepartmentSetting = () => {
    const { logout } = useAuth();
    const [departments, setDepartments] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [checkedDepartments, setCheckedDepartments] = useState([]);
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [anyChecked, setAnyChecked] = useState(false);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/Department/get-departments-name');
                console.log('API Response:', response.data); // Inspect the data structure
                if (Array.isArray(response.data.departments)) {
                    // Flatten the list of tuples to a list of strings
                    const departmentNames = response.data.departments.map(dept => ({ name: dept[0] }));
                    setDepartments(departmentNames);
                    setCheckedDepartments(new Array(departmentNames.length).fill(false));
                } else {
                    console.error('Unexpected response format:', response.data);
                }
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        };

        fetchDepartments();
    }, []);

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const handleHeaderCheckboxChange = (checked) => {
        setIsAllChecked(checked);
        const newCheckedDepartments = new Array(departments.length).fill(checked);
        setCheckedDepartments(newCheckedDepartments);
        setAnyChecked(checked);
    };

    const handleCheckboxChange = (index) => {
        const updatedCheckedDepartments = [...checkedDepartments];
        updatedCheckedDepartments[index] = !updatedCheckedDepartments[index];
        setCheckedDepartments(updatedCheckedDepartments);

        const anyChecked = updatedCheckedDepartments.some(checked => checked);
        setAnyChecked(anyChecked);

        // Update the state of the header checkbox
        const allChecked = updatedCheckedDepartments.every(checked => checked);
        setIsAllChecked(allChecked);
    };

    const filteredDepartments = departments.filter(department =>
        department.name.toLowerCase().includes(filterText.toLowerCase())
    );

    const headers = [
        { key: 'name', label: 'DEPARTMENT', width: '90%' },
      
    ];

    return (
        <MasterPage>
            <div className="d-flex flex-column flex-column-fluid p-4">
                {/* begin::Toolbar */}
                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    {/* begin::Toolbar container */}
                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                        {/* begin::Page title */}
                        <h2>Department Setting</h2>
                    </div>
                </div>

                <div className="d-flex flex-column border w-100">
                    <div className="d-flex flex-column flex-row-fluid border p-10 w-100">
                        <div className="d-flex flex-row-fluid w-100">
                            <div className="d-flex flex-row-fluid w-100">
                                <div className="col-4 d-flex flex-center flex-start">
                                    <div className="d-flex flex-column gap-4 flex-start w-100">
                                        <div className="d-flex flex-row-fluid align-items-center w-100">
                                            <label className="form-label col-3">Department</label>
                                            <input
                                                type="text"
                                                className="form-control form-control-solid col-7"
                                                placeholder="Department"
                                                value={filterText}
                                                onChange={handleFilterChange}
                                            />
                                        </div>
                                        <div className="d-flex flex-row-fluid align-items-center w-100">
                                            <label className="form-label col-3">Description</label>
                                            <input
                                                type="text"
                                                className="form-control form-control-solid col-7"
                                                placeholder="Description"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8 d-flex flex-center flex-start">
                                    <ButtonGroup anyChecked={anyChecked} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Table
                        headers={headers}
                        data={filteredDepartments}
                        isAllChecked={isAllChecked}
                        checkedDepartments={checkedDepartments}
                        onHeaderCheckboxChange={handleHeaderCheckboxChange}
                        onCheckboxChange={handleCheckboxChange}
                    />

                    <ul className="pagination" style={{ marginLeft: 'auto' }}>
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
};

export default DepartmentSetting;
