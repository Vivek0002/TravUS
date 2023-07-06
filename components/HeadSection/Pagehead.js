import React from 'react'
import './Pagehead.css'
import { useLocation } from 'react-router-dom'

function Pagehead() {
    const location = useLocation()
  return (
    <>
      <section className='image-heading'></section>
      <div className='container'>
        {/* <h1>{location.pathname.split("/")[1]}</h1> */}

        
      </div>
    </>
  )
}

export default Pagehead
