import { Outlet, NavLink, useLocation } from 'react-router-dom';
import './DashboadLayouts.css';
import { Squeeze as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import getmenus from '../APIs/MenuApi'
// import { RiDashboardHorizontalFill } from "react-icons/ri";
// import { IoSettingsSharp } from "react-icons/io5";
// import { RiProfileFill } from "react-icons/ri";
import { MdWifiProtectedSetup } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { AnimatePresence } from 'framer-motion';
import { BsGrid3X3GapFill } from "react-icons/bs";
// import ThemeToggle from '../Components/ThemeWork/Themetoggle';
import getmenuss from '../APIs/MenusApi';
import { MdDashboard, MdPeople, MdSettings } from 'react-icons/md';
import { MdKeyboardArrowDown } from "react-icons/md";
// import SidebarSkeleton from '../Components/Skeleton/Sidebarskeleton.js'

import Header from './Header/Header';


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







  const [Overly, setOverly] = useState(false)



  // const [Menu, setMenu] = useState([]);
  const [Menu2, setMenu2] = useState([]);
  // const [menuLoading, setMenuLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const data = await getmenus();
        const data2 = await getmenuss();
        // setMenu(data);
        setMenu2(data2)

        console.log(data2, '----------------------------------')
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);




  const menuItems = {
    Dashboard: MdDashboard,
    Users: MdPeople,
    Settings: MdSettings,
    Setups: MdWifiProtectedSetup,
    Shifts: FaClock
  };



  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,  // har li ko thoda delay ke sath animate kare
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };
  const location = useLocation();


  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };


  return (
    <div className="dashboard-container">

      {/* <motion.div  className={`${Overly ? 'overly-menu' : 'overly-menu-hide'} `} onClick={() => setOverly(false, console.log("Overly"))}>
        </motion.div > */}

      <AnimatePresence>
        {Overly && (
          <motion.div
            className="overly-menu"
            onClick={() => setOverly(false)}
            initial={{ opacity: 0, y: "-10%", }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: "-10%", }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="overly-card-box"
            // variants={containerVariants}
            >
              {Array.from({ length: 16 }).map((_, index) => (
                <motion.div
                  key={index}
                  className="overly-card"
                  // variants={cardVariants}
                  whileHover="hover"
                />
              ))}
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>


      {/* <div className={`m-0 p-0 ${isOpen ? 'active-sidebar' : ''}`}> */}

      {/* <aside className={` ${isOpen ? 'sidebar' : 'sidebar-not-active'}`}> */}

      <div className={`sidebar ${isOpen ? 'sidebar-active' : 'sidebar-not-active'}`}>
        <div className={`hum ${isOpen ? 'humburger1' : 'humburger'}`}>
          <div className='Hamburger'>
            <Hamburger
              size={20}
              duration={0.8}
              toggled={isOpen}
              toggle={setOpen}
              onToggle={handleToggle}
            />
          </div>
        </div>
        {/* <h2>Admin Panel</h2> */}
        <div className='nav-menu'>
          <motion.ul
            key={Menu2.length}
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >

            {

              Menu2.map((item, index) => {
                const Icon = menuItems[item.caption];
                const isActive =
                  location.pathname === item.url ||
                  item.children?.some(child =>
                    location.pathname.startsWith(child.url)
                  );
                return (

                  <motion.li key={item.id} variants={itemVariants}>

                    <NavLink

                      to={item.url}
                      className={() =>
                        `Li-always ${isActive ? "active-li" : ""} ${isOpen ? "Li-b" : "li-a"}`
                      }

                      onClick={() => item.children?.length && toggleMenu(item.id)}
                    >
                      <div className="icon">
                        {Icon && <Icon />}

                      </div>



                      {/* {isOpen &&(  */}
                      <motion.span
                        variants={{
                          hidden: { opacity: 0, x: -80 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.2, delay: index * 0.2 } }
                        }}
                        initial="hidden"
                        animate={isOpen ? "visible" : "hidden"}
                      >
                        <div>{item.caption}</div>
                        {item.children?.length > 0 && (
                          <MdKeyboardArrowDown
                            size={18}
                            style={{
                              marginLeft: "auto",
                              transition: "0.3s",
                              transform: openMenu === item.id ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                          />
                        )}

                      </motion.span>

                      {/* )} */}
                    </NavLink>
                    <AnimatePresence>
                      {item.children?.length > 0 && openMenu === item.id && (
                        <motion.div

                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          className="submenu"
                        >
                          {item.children.map((child) => (
                            <motion.li key={child.id}  >
                              <NavLink className={`Li-always-sub ${isActive ? "active-li" : ""} ${isOpen ? "Li-b" : "li-a"}`} to={child.url}>
                                <div className="icon">
                                  {Icon && <Icon size={20} />}
                                </div>
                                <motion.span
                                  variants={{
                                    hidden: { opacity: 0, x: -80 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.2, delay: 0.1 } }
                                  }}
                                  initial="hidden"
                                  animate={isOpen ? "visible" : "hidden"}
                                >
                                  {child.caption}
                                </motion.span>


                              </NavLink>
                            </motion.li>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>

                )
              })

            }
          </motion.ul>
        </div>

        <div className='sub-icon'>
          <div className='sub-icon-in'>
            <BsGrid3X3GapFill onClick={() => setOverly(true, console.log("Overly"))} />
          </div>
        </div>
      </div>



      {/* </aside> */}
      {/* <div className='sidebar-submenu'>

          </div> */}


      <main className={`main-content  p-0`}>

        <div className='main2'>
          <Header />
          <div className='main3'>
            {/* <div className={`sidebar-submenu ${isOpen ? '' : 'sidebar-submenu-not-active'}`}>

              </div> */}
            <
            >
              <motion.div
                key={location.pathname}  // unique key per page
                
                
                className='content-dash'
              >


                <Outlet />

                <div className='main-end'>
                  <div className='main-end-inner'>
                    © 2026 Syed Hassan Ullah. All rights reserved. | Privacy Policy | Terms & Conditions
                  </div>
                </div>
              </motion.div>
            </>

          </div>

        </div>
      </main>
    </div>

  );
};

export default DashboardLayout;
