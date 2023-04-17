import { useState } from 'react'
import React from 'react'
import { Container,FormControl,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Filters from './Filters'
const Header= () => {

  return (
  <Navbar class="navbar" style={{height:70}}>
    <Container>
        <Navbar.Brand>
            <Link to="/">Library</Link>
        </Navbar.Brand>
        
    </Container>
  </Navbar>
  )
}

export default Header