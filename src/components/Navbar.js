import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showNavExternal, setShowNavExternal] = useState(false);
  
  return (
    <section class ="container">
      <MDBNavbar>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>
      <MDBCollapse show={showNavExternal}>
        <div className='bg-light shadow-3 p-4'>
          <MDBBtn block className='border-bottom m-0' color='link'>
            <a href="#about">About Me</a>
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
          <a href="#projects">Projects</a>
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
          <a href="#skills">Skills</a>
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
          <a href="#testimonials">Testimonials</a>
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
          <a href="#contacts">Contacts</a>
          </MDBBtn>
        </div>
      </MDBCollapse>
      </section>
  );
}