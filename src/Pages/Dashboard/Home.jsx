import CalendarDash from '../../Components/Dashboard-Component/Calendar';
// import Calendar from '../../Components/Dashboard-Component/Calendar';
import './Home.css';
// import { motion,  } from 'framer-motion';
import { RiDashboardHorizontalFill } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div className='main-top2'>
        <div className='main-top2-inner'>
         <div className='icon-links'><RiDashboardHorizontalFill/></div>
         <div className='des-links'><h6>Dashbord</h6><p> Home / Dashboard</p></div>
        </div>
      </div>

      <CalendarDash/>
      
      <div className='cards'>
        <div className='module'><h6>Attendance</h6></div>
        <div className='module'><h6>HR Managment</h6></div>
        <div className='module'><h6>Payroll Managment</h6></div>
        <div className='module'><h6>Visitor Managment</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>
        <div className='module'><h6>Hello</h6></div>


      </div>

    </>
  );
};

export default Home;
