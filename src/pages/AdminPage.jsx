import React from 'react';

export default function AdminPage() {
  const handleExportData = () => {
    alert("Exporting guest data to CSV format...");
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Wedding Admin Dashboard</h1>
        <button onClick={handleExportData} className="btn-export">
          Export Guest List Data
        </button>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total RSVPs</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>0 / 120</p>
        </div>
        <div className="stat-card">
          <h3>Attending</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>0</p>
        </div>
        <div className="stat-card">
          <h3>Dietary Flags</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>0</p>
        </div>
      </div>

      <h2>Guest Management Overview</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Group Name</th>
            <th>Size</th>
            <th>Status</th>
            <th>Accommodation?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A7K2</td>
            <td>The Smith Family</td>
            <td>2</td>
            <td style={{ color: 'orange' }}>Pending</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}