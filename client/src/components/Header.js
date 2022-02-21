import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {

//todo: render a logo

// todo: render a link to the two pages using navlink components

return(
    <div> 
      <h1> 
        Placeholder Header - add privy logo 
      </h1>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/textMessages">Text Messages</NavLink>
          </div>
)    
}

export default Header