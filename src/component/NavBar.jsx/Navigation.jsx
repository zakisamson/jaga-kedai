import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'

function Navigation({navMenu: {navPath, navImageActive, navImageInactive, navName}, handleNavigation, displayNavBar}) {

  const pathname = useLocation();
  let isActive = pathname.pathname === navPath;

  return (
    <NavLink 
      to={navPath} 
      className='nav-menu'
      id={`nav-menu-${navName.toLowerCase()}`} 
      onClick={handleNavigation}
      style={{
        width: displayNavBar ? '100%' : '3rem',
        justifyContent: displayNavBar ? 'flex-start' : 'center'
    }}
    >
        <img src={isActive ? navImageActive : navImageInactive} alt="" className='menu-icon' />
        <span 
          className={`menu-link menu-${navName.toLowerCase()}`}
          style={{
            display: displayNavBar ? 'block' : 'none',
            color: isActive ? '#34905f' : '#fdfdfd'
          }}
        >
          {navName}
        </span>
    </NavLink>
  )
}

export default Navigation