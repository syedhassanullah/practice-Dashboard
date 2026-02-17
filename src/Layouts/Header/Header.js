import React from 'react'
import './Header.css'
import ColorThemeToggle from '../../Components/ThemeWork/ColorThemeToggle';
import ThemeToggle from '../../Components/ThemeWork/Themetoggle';

export default function Header() {
    return (
        <div>
            <div className='main-top'>
                {/* <h3>MAKKAYS TimeFlow</h3> */}
                <h4>MAKKAYS TimeLogix </h4>
                <div className='Top-icons'>
                    <ColorThemeToggle />
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}
