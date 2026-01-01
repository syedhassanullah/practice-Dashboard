import { Outlet, Link, useLocation } from 'react-router-dom';
import './DashboadLayouts.css';
import { Rotate  as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react';
// import { LuLayoutDashboard } from "react-icons/lu";
import { motion } from 'framer-motion';
import getmenus from '../APIs/MenuApi'
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { RiProfileFill } from "react-icons/ri";
import { MdWifiProtectedSetup } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { AnimatePresence } from 'framer-motion';







// import { menu } from 'framer-motion/client';
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


  const [Menu, setMenu] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getmenus();
        setMenu(data);
        console.log(data,'----------------------------------')
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // const listVariants = {
  //   hidden: {},
  //   visible: {
  //     transition: {
  //       staggerChildren: 0.15,
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, x: -40 },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { duration: 0.4, ease: "easeOut" },
  //   },
  // };




  const menuItems = {
    Home: RiDashboardHorizontalFill,
    Setting: IoSettingsSharp,
    Profile: RiProfileFill,
    Setups: MdWifiProtectedSetup,
    Shifts: FaClock
  };
  //  const [loaded, setLoaded] = useState(false);

  // Trigger animation when Menu data arrives

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
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };
  const location = useLocation();
  return (
    <div className="dashboard-container">
      <div className='row m-0 p-0'>
        {/* <div className={`m-0 p-0 ${isOpen ? 'active-sidebar' : ''}`}> */}
        <aside className={`sidebar ${isOpen ? '' : 'sidebar-not-active'}`}>
          <div className='overly'></div>
          <div className='sidebar-in'>
            <div className={`hum ${isOpen ? 'humburger1' : 'humburger'}`}>
              <Hamburger
                size={22}
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
                  key={Menu.length}
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"

                // animate={menuLoaded ? "visible" : "hidden"}
                // exit="hidden"
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

                  {Menu.map((item, index) => {
                    const Icon = menuItems[item.caption];
                    return (
                      <motion.li key={item.sno} variants={itemVariants}>
                        <Link
                          className={`Li-always ${isOpen ? "Li-b" : "li-a"}`}
                          to={item.url}
                        >
                          <div className="icon">
                            {Icon && <Icon size={20} />}
                          </div>


                          <motion.span
                            variants={{
                              hidden: { opacity: 0, x: -80 },
                              visible: { opacity: 1, x: 0, transition: { duration: 0.2, delay: index * 0.1 } }
                            }}
                            initial="hidden"
                            animate={isOpen ? "visible" : "hidden"}>
                            &nbsp;&nbsp;&nbsp;&nbsp;{item.caption}
                          </motion.span>
                        </Link>
                      </motion.li>

                    )

                  })}
                </motion.ul>
              </nav>
            </div>
            <div></div>
          </div>
        </aside>
        {/* </div> */}
        <main className={`main-content  p-0`}>

          <div className='main2'>
            <div className='main-top'></div>
            <div className='main3'>
              <AnimatePresence mode="wait"
              >
                <motion.div
                  key={location.pathname}  // unique key per page
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  // exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  
                >
                  <Outlet key={location.pathname} />
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
