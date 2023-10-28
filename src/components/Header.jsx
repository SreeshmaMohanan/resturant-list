import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
        <Navbar className="bg-success text-light fw-bolder">
        <Container>
          <Navbar.Brand>
           <span style={{color:'white'}}>
                <i class="fa-solid fa-mug-hot fa-beat p-2 align-items-center"></i>
                {' '}
                De-Cafe
           </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header