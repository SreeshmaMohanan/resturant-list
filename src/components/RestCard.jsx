import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RestCard({restauarnt}) {
  return (
    <>
      <Link to={`/view/:${restauarnt?.id}`} style={{textDecoration:'none'}}>
        <Card  className='mb-3'>
      <Card.Img height={'250px'} className='rounded p-2' variant="top" src={restauarnt?.photograph} />
      <Card.Body>
        <Card.Title>{restauarnt?.name}</Card.Title>
        <Card.Text>
          <p>Cuisine:{restauarnt?.cuisine_type}</p>
          <p>{restauarnt?.neighborhood}</p>
        </Card.Text>
    
      </Card.Body>
    </Card>
    </Link>
    </>
  )
}

export default RestCard