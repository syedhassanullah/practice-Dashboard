// import React from 'react'
import { useContext, useState } from 'react'
import { OneThemeContext } from '../../Context/Theme Context/OneThemeContext'
import { IoColorFilterSharp } from "react-icons/io5";
import { AnimatePresence, motion } from 'framer-motion';
import './ColorThemeToggle.css'

export default function ColorThemeToggle() {

    const { setColorTheme } = useContext(OneThemeContext);
    const [open, setOpen] = useState(false);

    const handleThemeChange = (color) => {
        setColorTheme(color);
        setOpen(false);
    };
    return (
        <>
            <div className='theme-change-icon'
                onClick={() => setOpen(prev => !prev)}>
                <IoColorFilterSharp />
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        className='select-theme'
                        initial={{ opacity: 0, y: -10, x: -10, scale: 0.5 }}
                        animate={{ opacity: 1, y: 0, x: 0, scale: 1.0 }}
                        exit={{ opacity: 0, y: -10, x: -10, scale: 0.5 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >


                        <div className='button' onClick={() => handleThemeChange("blue")}>Blue</div>
                        <div className='button' onClick={() => handleThemeChange("red")}>Red</div>
                        <div className='button' onClick={() => handleThemeChange("yellow")}>Yellow</div>
                        <div className='button' onClick={() => handleThemeChange("purple")}>Purple</div>
                        <div className='button' onClick={() => handleThemeChange("green")}>Green</div>
                        <div className='button' onClick={() => handleThemeChange("orange")}>Orange</div>
                        <div className='button' onClick={() => handleThemeChange("pink")}>Pink</div>
                        <div className='button' onClick={() => handleThemeChange("silver")}>Silver</div>
                        {/* <button onClick={() => setColorTheme("yellow")}>Yellow</button> */}


                        {/* <p>Current Theme: {colorTheme}</p> */}
                    </motion.div>
                )}
            </AnimatePresence>
        </>

    )
}
