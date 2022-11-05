import React from 'react';
import { textColor } from '../data';
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className='p-5'>
        <p className='text-warning fw-semibold fs-2'>Hello!</p>
        <p>i'm
        <h1 className='fw-bold home-title font-Roboto' style={{color: textColor, fontFamily: "Open Sans, sans-serif"}}>Vikas kotary</h1> 
        </p>
    </div>
  )
}

export default Home