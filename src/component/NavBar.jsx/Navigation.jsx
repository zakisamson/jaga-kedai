import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'

function Navigation({navMenu: {navPath, navImage, navImageInactive, navName}, handleNavigation, displayNavBar}) {

  const pathname = useLocation();
  let isActive = pathname.pathname === navPath;

  return (
    <NavLink 
      to={navPath} 
      className='nav-menu'
      id={`nav-menu-${navName.toLowerCase()}`} 
      onClick={handleNavigation}
      style={{
        padding: displayNavBar ? '0 2rem 0 1rem' : '.75rem',
        width: displayNavBar ? 'calc(20vw - 4rem)' : '3rem',
    }}
    >
        <img src={isActive ? navImage : navImageInactive} alt="" className='menu-icon' />
        <span 
          className={displayNavBar ? 'nav-link open' : 'nav-link close'}
          style={{
            opacity: displayNavBar ? '1' : '0',
            color: isActive ? '#34905f' : '#fdfdfd',
            visibility: displayNavBar ? 'visible' : 'hidden'
          }}
        >
          {navName}
        </span>
    </NavLink>
  )
}

export default Navigation