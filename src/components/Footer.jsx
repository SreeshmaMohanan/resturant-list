import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-success p-5 light '>
        <Row className='align-items-center justify-content-between'>
            <Col sm={12} md={6} lg={3}>
             <div>
                    <h3><Link to='/' style={{color:'white'}} className='btn btn-transparent'> <i class="fa-solid fa-mug-hot fa-beat p-2 align-items-center"></i>
              </Link>{' '}
            De-Cafe</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus aspernatur placeat ex ipsa temporibus rem sunt. Impedit repellat amet, rerum, corporis soluta cumque nulla id incidunt nisi eos molestiae.</p>
             </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
                <div>
                <h3>About Us</h3>
                <h6>De-cafe</h6>
                <h6>Both Hot And cold Drinks</h6>
                <h6></h6>
                <h6></h6>
                </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
                <div>
                <h3>Contact Us</h3>
               <p className='d-flex'>
                    <input type="text" className='Form-control p-2' placeholder='enter your email' />
                    <button className='btn btn-success ms-2'>Subscribe</button>
               </p>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Footer