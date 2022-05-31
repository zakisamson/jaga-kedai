import React from 'react'
import { assets } from './assets';
import Navigation from './Navigation';
import './navbar.scss'

function NavBar({displayNavBar, handleDisplayNav}) {

    console.log(displayNavBar)
    const navMenu = [
        {
            navName: 'Dashboard',
            navImage: assets.dashboardIcon,
            navImageInactive: assets.dashboardInactiveIcon,
            navPath: '/dashboard'
        },
        {
            navName: 'Menu',
            navImage: assets.menuIcon,
            navImageInactive: assets.menuInactiveIcon,
            navPath: '/menu'
        },
        {
            navName: 'Merchant',
            navImage: assets.merchantIcon,
            navImageInactive: assets.merchantInactiveIcon,
            navPath: '/merchant'
        },
        {
            navName: 'Reports',
            navImage: assets.reportsIcon,
            navImageInactive: assets.reportsInactiveIcon,
            navPath: '/reports'
        }
    ]

    return (
    <nav 
        className='dashboard-nav-container' 
        style={{
            padding: displayNavBar ? '2rem 2rem' : '2rem 1rem',
            width: displayNavBar ? '20vw' : '7vw'
        }}
    >
        <div className='nav-header' 
            style={
                displayNavBar 
                ? {justifyContent: 'space-between'} 
                : {justifyContent: 'center'}
            }>
            <img className={displayNavBar ? 'nav-logo open' : 'nav-logo close'} 
                src={assets.logoTextIcon} 
                alt=""  
                style={
                    displayNavBar 
                    ? {display: 'block'} 
                    : {display: 'none'}}/>
            <img className='nav-icon' 
                src={
                    displayNavBar 
                    ? assets.hamburderCloseIcon 
                    : assets.hamburgerMenuIcon} 
                alt="" 
                onClick={() => handleDisplayNav()}/>
        </div>
        <div className='nav-menu-container'>
            {navMenu.map((menu, idx) => <Navigation key={idx} navMenu={menu} displayNavBar={displayNavBar} /> )}
        </div>
    </nav>
    )
}

export default NavBar