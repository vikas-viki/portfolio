import React from 'react';
import { textColor } from '../data';
import "../Styles/Home.css";

const Home = () => {
    return (
        <>
            <div className='p-5 py-3 mb-4'>
                {/* <p className='text-warning fw-semibold fs-3'>Hello!</p>
        <p className='text-secondary fw-semibold fs-2'>I'm
        <span className='fw-bold home-title font-Roboto' style={{color: textColor, fontFamily: "Open Sans, sans-serif"}}>Vikas kotary</span> 
        A passionate individual who always thrives to work on end to end web apps which develop sustainable and scalable social and technical systems to create impact. 
        </p> */}
                <div className='p-lg-5 p-md-3 p-sm-3 p-xs-1 justify-content-center'>
                    <img src="Images/profile_img.png" alt='profile_photo' className='mx-lg-5 rounded' style={{ width: "270px", height: "400px", float: "left" }} />
                    <p>
                        <h1 className='fw-bold home-title font-Roboto' style={{ color: textColor, fontFamily: "Open Sans, sans-serif" }}>Vikas kotary</h1>
                        <h3 className='text-secondary'>Full stack Web developer</h3>
                        <p className='text-secondary fs-4 font-semibold w-75'>I'm a web developer who throughly enjoys engaging in making full stack web apps which are interactive, simpler and scalable.</p>
                    </p>
                    <div class="d-flex ">
                        <a href="https://github.com/vikas-viki" target="_blank" rel="noreferrer">
                            <i class="fa-brands fa-square-github text-dark fs-1 px-1"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/vikas-kotari-6a0918240/" target="_blank" rel="noreferrer">
                            <i class="fa-brands fa-linkedin fs-1 text-primary px-2"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer">
                            <i class="fa-brands fa-youtube fs-1 text-danger px-1"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='tech-stacks p-5 m-4'>
                <h1 className='fw-bold tech-stack-title font-Roboto mt-5 pt-3' style={{ color: textColor, fontFamily: "Open Sans, sans-serif" }}>Tech stack :</h1>
                <div className='py-3'>
                    <span >
                        {/* <p className='fw-semibold fs-5 bg-dark text-light d-inline-flex px-2 position-relative'>Html</p> */}
                        <i class="fa-brands fa-html5 fa-4x px-2 " style={{ color: "rgb(227, 79, 38)" }}></i>
                        
                    </span>
                    <span>
                        <i class="fa-brands fa-css3 fa-4x px-2" style={{ color: "rgb(21, 114, 182)" }}></i>
                    </span>
                    <span >
                        <i class="fa-brands fa-js fa-4x mx-2 py-0 bg-dark" style={{ color: "rgb(247, 223, 30)", lineHeight: 0.8 }}></i>
                    </span>
                    <span>
                        <i class="fa-brands fa-react fa-4x px-2" style={{ color: "rgb(97, 218, 251)" }}></i>
                    </span>
                    <span>
                        <i class="fa-brands fa-node-js fa-4x px-2 text-success" style={{ coolor: "#3cf50a" }}></i>
                    </span>
                    <span>
                        <i class="fa-brands fa-npm fa-4x px-2" style={{ color: "rgb(203, 56, 55)" }}></i>
                    </span>
                </div>
                <div className='py-2'>
                    <p className='fs-semibold fs-4'>🌌 Building resposive website front end using React.</p>
                    <p className='fs-semibold fs-4'>🌌 Creating application backend in Node & Express.</p>
                </div>
            </div>
        </>
    )
}

export default Home