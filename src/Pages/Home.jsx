import React, { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResturants } from '../redux/resturantSlice'

function Home() {
   const allRestaurants=useSelector((state)=>state.resturantSlice.allRestaurants)
   const dispatch= useDispatch()
   useEffect(()=>{
    dispatch(fetchResturants())
   },[])
  return (
    <>
    <Row className='mt-5'>
       {
        allRestaurants?.length>0?allRestaurants.map(restauarnt=>(
        <Col className=' px-5 me-3' sm={12} md={6} lg={4} xl={3}>
        <RestCard/>
       
        </Col>))
        :null
}

    </Row>
    </>
  )
}

export default Home