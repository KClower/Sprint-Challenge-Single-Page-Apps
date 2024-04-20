import React, {useState} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink} from "react-router-dom";

export default function Header() {
  
 


  return (
    <div>
      <Nav tag="div" className="flex-column">   
      <h1 className="text-center">Rick &amp; Morty Fan Page</h1>  
     
          <Nav className="justify-content-center">      
            <NavItem>
              <NavLink tag={RRNavLink} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/character">Characters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/location">Locations</NavLink>
            </NavItem>
          </Nav>
        
      </Nav>
    </div>
  );
}





// return (
//   <header className="ui centered">
//     <h1 className="ui center">Rick &amp; Morty Fan Page</h1> 
//   </header>
  
// );
