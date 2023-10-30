import React, { useEffect } from 'react'
import { Row,Col,Spinner } from 'react-bootstrap'
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
    {/* <div className='d-flex justify-content-center align-items-center'>
      {
        loading && <div>
          <span>
          <Spinner animation="border" variant="danger" /> loading....
          </span>
        </div>
      }

    </div> */}
    {/* <div className='d-flex justify-content-center align-items-center'>
      {
        !loading && error?<div>
          <span>
        {error}
          </span>
        </div>:null
      }

    </div> */}
   

  
    <Row className='mt-5 justify-content-center'>
       {
       allRestaurants?.length>0?allRestaurants.map(restauarnt=>(
        <Col className=' px-5 me-3' sm={12} md={6} lg={4} xl={3}>
        <RestCard restauarnt={restauarnt}/>
       
        </Col>))
        :<div className='d-flex fw-bolder m-5 text-danger justify-content-center align-items-center  w-100'>
          No Restaurants Are Available
        </div>
}

    </Row>
  </>
  )
}

export default Home
