import { Outlet, Link } from 'react-router-dom';
import './DashboadLayouts.css'; // optional for styling
// import { Container } from 'react-bootstrap';

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/dashboard/profile">Profile</Link></li>
            <li><Link to="/dashboard/settings">Settings</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <div className='main2'>
          <Outlet />
        </div>
       
      </main>
    </div>
  );
};

export default DashboardLayout;
