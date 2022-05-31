import React, { useState } from 'react'
import { assets } from './assets';
import Navigation from './Navigation';
import './navbar.scss'

function NavBar() {
    const [displayNavBar, setDisplayNavBar] = useState(false);
    
    const navMenu = [
        {
            navName: 'Dashboard',
            navImageActive: assets.dashboardIcon,
            navImageInactive: assets.dashboardInactiveIcon,
            navPath: '/dashboard'
        },
        {
            navName: 'Menu',
            navImage: assets.menuIcon,
            navImageInactive: assets.menuInactiveIcon,
            navPath: '/dashboard/menu'
        },
        {
            navName: 'Merchant',
            navImage: assets.merchantIcon,
            navImageInactive: assets.merchantInactiveIcon,
            navPath: '/dashboard/merchant'
        },
        {
            navName: 'Reports',
            navImage: assets.reportsIcon,
            navImageInactive: assets.reportsInactiveIcon,
            navPath: '/dashboard/reports'
        }
    ]

    const handleDisplayNav = () => {
        setDisplayNavBar(!displayNavBar);
    }

    return (
    <nav className='dashboard-nav-container' style={displayNavBar ? {padding: '2rem 2rem'} : {padding: '2rem 1rem'}}>
        <div className='nav-header' style={displayNavBar ? {justifyContent: 'space-between'} : {justifyContent: 'center'}}>
            <img className='nav-logo' src={assets.logoTextIcon} alt=""  style={displayNavBar ? {display: 'block'} : {display: 'none'}}/>
            <img className='nav-icon' src={displayNavBar ? assets.hamburderCloseIcon : assets.hamburgerMenuIcon} alt="" onClick={handleDisplayNav}/>
        </div>
        <div className='nav-menu-container'>
            {navMenu.map((menu, idx) => <Navigation key={idx} navMenu={menu} displayNavBar={displayNavBar} /> )}
        </div>
    </nav>
    )
}

export default NavBar