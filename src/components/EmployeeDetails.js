// src/components/EmployeeDetails.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeeDetails.css'; // Make sure to create a corresponding CSS file

const EmployeeDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="employee-dashboard">
            <div className="dashboard-header">
                <h1>Employee Dashboard</h1>
                <p>Welcome to your dashboard. Here you can view and manage your details.</p>
            </div>
            <div className="dashboard-content">
                <div className="profile-card">
                    <h2>Profile Details</h2>
                    <p><strong>Name:</strong> John Doe</p>
                    <p><strong>Email:</strong> john.doe@example.com</p>
                    <p><strong>Role:</strong> Software Engineer</p>
                    <p><strong>Salary:</strong> $80,000</p>
                    <p><strong>Address:</strong> 1234 Elm St, Springfield</p>
                    <button className="btn" onClick={() => navigate('/edit-profile')}>Edit Profile</button>
                </div>
                <div className="options-card">
                    <h2>Other Options</h2>
                    <button className="btn" onClick={() => navigate('/view-schedule')}>View Schedule</button>
                    <button className="btn" onClick={() => navigate('/view-payments')}>View Payments</button>
                    <button className="btn" onClick={() => navigate('/view-leave-requests')}>View Leave Requests</button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;
