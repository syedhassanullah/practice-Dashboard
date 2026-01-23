import { Outlet, Link, useLocation } from 'react-router-dom';
import './DashboadLayouts.css';
import { Squeeze as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import getmenus from '../APIs/MenuApi'
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { RiProfileFill } from "react-icons/ri";
import { MdWifiProtectedSetup } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { AnimatePresence } from 'framer-motion';
import { BsGrid3X3GapFill } from "react-icons/bs";




const DashboardLayout = () => {


// ---------This is for Menu Button 
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
        console.log(data, '----------------------------------')
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);




  const menuItems = {
    Home: RiDashboardHorizontalFill,
    Setting: IoSettingsSharp,
    Profile: RiProfileFill,
    Setups: MdWifiProtectedSetup,
    Shifts: FaClock
  };



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

          <div className='sidebar-in'>
            <div className={`hum ${isOpen ? 'humburger1' : 'humburger'}`}>
              <Hamburger
                size={28}
                duration={0.8}
                toggled={isOpen}
                toggle={setOpen}
                onToggle={handleToggle}
              />
            </div>

            {/* <h2>Admin Panel</h2> */}
            <nav>
              <motion.ul
                key={Menu.length}
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
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
                      {/* <Link
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
                      </Link> */}
                    </motion.li>

                  )
                })}
              </motion.ul>
            </nav>

            <div className='sub-icon'>
              <div className='sub-icon-in'>
                <BsGrid3X3GapFill />
              </div>
            </div>
          </div>
        </aside>
        {/* </div> */}
        <main className={`main-content  p-0`}>

          <div className='main2'>
            <div className='main-top'>
              <h3>MAKKAYS PVT LTD</h3>
            </div>
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
            <div className='main-end'>
              <div className='main-end-inner'>
                © 2026 Syed Hassan Ullah. All rights reserved. | Privacy Policy | Terms & Conditions
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
