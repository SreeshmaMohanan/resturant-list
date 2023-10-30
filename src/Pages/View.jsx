import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function View() {
    const {id}=useParams()
    const {}
    const [restauarnt,SetRestaurant]=useState({})
    useEffect(()=>{
        SetRestaurant()
    },[])
    console.log(restauarnt);
  return (
    <div>View</div>
  )
}

export default View