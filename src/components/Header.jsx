import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchRestuarant } from '../redux/resturantSlice'

function Header() {
  const dispatch=useDispatch()
  return (
    <div>
        <Navbar className="bg-success text-light fw-bolder">
        <Container>
          <Navbar.Brand>
           <Link to='/' style={{color:'white',textDecoration:'none'}}>
                <i class="fa-solid fa-mug-hot fa-beat p-2 align-items-center"></i>
                {' '}
                De-Cafe
           </Link>
          </Navbar.Brand>
          <div className='d-flex ms-auto align-items-center'>
            <input onChange={(e)=>dispatch(searchRestuarant(e.target.value))} type="text" className='form-control' placeholder='search Restuarant'/>
            <i className='fa-solid fa-search' style={{marginLeft:'-30px'}}></i>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header