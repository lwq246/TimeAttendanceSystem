import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { AuthProvider } from './app/auth/core/AuthProvider';
import OvertimeRuleSetting from './app/pages/SettingPages/OvertimeRuleSetting';
import PrivateRoute from './app/routing/PrivateRoute';
// Pages
//import HomePage from './app/pages/HomePage';

// Login
import ForgotPasswordPage from './app/auth/forgot-password';
import ResetPasswordPage from './app/auth/reset-password';
import SignInPage from './app/auth/sign-in';
import SignUpPage from './app/auth/sign-up';
import BranchSetting from './app/pages/SettingPages/BranchSetting';
import { CalendarWorkingTeamSetting } from './app/pages/SettingPages/CalendarWorkingTeamSetting';
import DepartmentSetting from './app/pages/SettingPages/DepartmentSetting';
import PublicHolidaySetting from './app/pages/SettingPages/PublicHolidaySetting';
import { ReasonSetting } from './app/pages/SettingPages/ReasonSetting';
import { WorkingShiftCalendarCodeSetting } from './app/pages/SettingPages/WorkingShiftCalendarCodeSetting';
import { WorkingShiftPatternSetting } from './app/pages/SettingPages/WorkingShiftPatternSetting';
import FleXiMealBreakSetting from './app/pages/SettingPages/FleXiMealBreakSetting';
import WorkingRuleSetting from './app/pages/SettingPages/WorkingRuleSetting';
// Modules
import DashboardPage from './app/modules/dashboard/dashboard';
import ProfilePage from './app/modules/profile/ProfilePage';
import TestPage from './app/modules/profile/TestPage';
import ClockingIdSetting from './app/pages/SettingPages/ClockingIdSetting';
import { EmployeeRateAndCustomFieldsSetting } from './app/pages/SettingPages/EmployeeRateAndCustomerFIeldSetting';


function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Pages */}
                    {/* <Route path="/" element={<HomePage />} /> */}

                    {/* Login */}
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="/reset-password" element={<ResetPasswordPage />} />
                    
                    {/* Modules */}
                    <Route path="/" element={<PrivateRoute element={DashboardPage} />} />
                    <Route path="/dashboard" element={<PrivateRoute element={DashboardPage} />} />
                    <Route path="/profile" element={<PrivateRoute element={ProfilePage} />} />
                    <Route path="/test" element={<PrivateRoute element={TestPage} />} />
                    <Route path="/branch-setting" element={<PrivateRoute element={BranchSetting} />}></Route>
                    <Route path="/department-setting" element={<PrivateRoute element={DepartmentSetting} />}></Route>
                    <Route path="/public-holiday-setting" element={<PrivateRoute element={PublicHolidaySetting} />}></Route>
                    <Route path="/working-shift-pattern-setting" element={<PrivateRoute element={WorkingShiftPatternSetting} />}></Route>
                    <Route path="/calendar-working-team-setting" element={<PrivateRoute element={CalendarWorkingTeamSetting} />}></Route>
                    <Route path="/working-shift-calendar-code-setting" element={<PrivateRoute element={WorkingShiftCalendarCodeSetting} />}></Route>
                    <Route path="/working-shift-calendar-code-setting" element={<PrivateRoute element={WorkingShiftCalendarCodeSetting} />}></Route>
                    <Route path="/reason-setting" element={<PrivateRoute element={ReasonSetting} />}></Route>
                    <Route path="/employee-rate-and-customer-field-setting" element={<PrivateRoute element={EmployeeRateAndCustomFieldsSetting} />}></Route>
                    <Route path="/clocking-id-setting" element={<PrivateRoute element={ClockingIdSetting} />}></Route>
                    <Route path="/flexi-meal-break-setting" element={<PrivateRoute element={FleXiMealBreakSetting} />}></Route>
                    <Route path="/overtime-rule-setting" element={<PrivateRoute element={OvertimeRuleSetting} />}></Route>
                    <Route path="/working-rule-setting" element={<PrivateRoute element={WorkingRuleSetting} />}></Route>
                </Routes>
                <ToastContainer />
            </Router>
        </AuthProvider>
    );
}

export default App;