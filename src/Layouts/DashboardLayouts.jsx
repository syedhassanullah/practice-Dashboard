import { Outlet, Link } from 'react-router-dom';
import './DashboadLayouts.css';
import { Slant as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { motion } from 'framer-motion';
// optional for styling
// import { Container } from 'react-bootstrap';

const DashboardLayout = () => {

  const [isOpen, setOpen] = useState(false)

  const click = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const handleToggle = (toggled) => {
    if (toggled) {
      click();

      console.log(toggled)
    }
    else {
      onClose();
      console.log(toggled)
    }
  }

  const menuItems = [
    { name: "Dashboard", to: "/dashboard" },
    { name: "Profile", to: "/dashboard/profile" },
    { name: "Settings", to: "/dashboard/settings" },
    { name: "Dashboard", to: "/dashboard" },
    { name: "Profile", to: "/dashboard/profile" },
    { name: "Settings", to: "/dashboard/settings" },
  ];

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // har li ko thoda delay ke sath animate kare
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="dashboard-container">
      <div className='row m-0 p-0'>
        {/* <div className={`m-0 p-0 ${isOpen ? 'active-sidebar' : ''}`}> */}
        <aside className={`sidebar ${isOpen ? '' : 'sidebar-not-active'}`}>
          <div className='overly'></div>
          <div className='sidebar-in'>
            <div className={`hum ${isOpen ? 'humburger1' : 'humburger'}`}>
              <Hamburger
                size={25}
                duration={0.8}
                toggled={isOpen}
                toggle={setOpen}
                onToggle={handleToggle}
              />
            </div>
            <div>
              {/* <h2>Admin Panel</h2> */}
              <nav>
                <motion.ul
                  // initial={{ opacity: 0, scale: 1, x: -100 }}
                  // animate={{ opacity: 1, scale: 1, x: 0 }}
                  // exit={{ opacity: 0, }}
                  // transition={{ duration: 0.9 }}
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {/* <li><Link className={` Li-always  ${isOpen ? 'Li-b' : 'li-a'} `} to="/dashboard"><div className='icon'><LuLayoutDashboard /></div><span className={`span1 ${isOpen ? '' : 'span'}`}>&nbsp;&nbsp;Dashboard</span></Link></li>
                  <li><Link className={` Li-always  ${isOpen ? 'Li-b' : 'li-a'} `} to="/dashboard/profile"><div className='icon'><LuLayoutDashboard /></div><span className={`span2 ${isOpen ? '' : 'span'}`}>&nbsp;&nbsp;Profile</span></Link></li>
                  <li><Link className={` Li-always  ${isOpen ? 'Li-b' : 'li-a'} `} to="/dashboard/settings"><div className='icon'><LuLayoutDashboard /></div><span className={`span3 ${isOpen ? '' : 'span'}`}>&nbsp;&nbsp;Setting</span></Link></li>
                  <li><Link className={` Li-always  ${isOpen ? 'Li-b' : 'li-a'} `} to="/dashboard"><div className='icon'><LuLayoutDashboard /></div><span className={`span1 ${isOpen ? '' : 'span'}`}>&nbsp;&nbsp;Dashboard</span></Link></li>
                  <li><Link className={` Li-always  ${isOpen ? 'Li-b' : 'li-a'} `} to="/dashboard"><div className='icon'><LuLayoutDashboard /></div><span className={`span2 ${isOpen ? '' : 'span'}`}>&nbsp;&nbsp;Profile</span></Link></li>
                  <li><Link className={` Li-always  ${isOpen ? 'Li-b' : 'li-a'} `} to="/dashboard"><div className='icon'><LuLayoutDashboard /></div><span className={`span3 ${isOpen ? '' : 'span'}`}>&nbsp;&nbsp;Setting</span></Link></li>
                  <li><Link className={` Li-always  ${isOpen ? 'Li-b' : 'li-a'} `} to="/dashboard"><div className='icon'><LuLayoutDashboard /></div><span className={`span1 ${isOpen ? '' : 'span'}`}>&nbsp;&nbsp;Dashboard</span></Link></li>
                  <li><Link className={` Li-always  ${isOpen ? 'Li-b' : 'li-a'} `} to="/dashboard"><div className='icon'><LuLayoutDashboard /></div><span className={`span2 ${isOpen ? '' : 'span'}`}>&nbsp;&nbsp;Profile</span></Link></li>
                  <li><Link className={` Li-always  ${isOpen ? 'Li-b' : 'li-a'} `} to="/dashboard"><div className='icon'><LuLayoutDashboard /></div><span className={`span3 ${isOpen ? '' : 'span'}`}>&nbsp;&nbsp;Setting</span></Link></li> */}

                  {menuItems.map((item, index) => (
                    <motion.li key={index} variants={itemVariants}>
                      <Link
                        className={`Li-always ${isOpen ? "Li-b" : "li-a"}`}
                        to={item.to}
                      >
                        <div className="icon">
                          <LuLayoutDashboard />
                        </div>
                        <span className={`${isOpen ? "" : "span"}`}>
                          &nbsp;&nbsp;{item.name}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
            </div>
            <div></div>
          </div>
        </aside>
        {/* </div> */}
        <main className={`main-content  p-0`}>
          <div className='main2'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
