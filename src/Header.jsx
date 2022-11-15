import React from 'react';
import { NavLink }  from 'react-router-dom';

const Header = () => {
  return (
      <div className='header_container'>
          <div className='header_logo'>TECH SOLUTION</div>
          <div className='header_menu'>
              <NavLink exact activeClassName='active_class' to='/'>Home</NavLink>
              <NavLink exact activeClassName='active_class' to='/about'>About</NavLink>
              <NavLink exact activeClassName='active_class' to='/contact'>Contact</NavLink>
              <NavLink exact activeClassName='active_class' to='/service'>Service</NavLink>
          </div>
      </div>
  )
}

export default Header