import React from 'react';
import { textColor } from '../data';

const Projects = () => {
    const projects = [
        {
            name: "I - Notebook",
            created_at: "23-10-2022",
            site_link: "Site link"
        },
        {
            name: "resume builder",
            created_at: "01-10-2022",
            site_link: "Site link"
        }
    ]
    return (
        <>
<h1 className='fw-bold tech-stack-title font-Roboto mt-4  text-center fs-1' style={{ color: textColor, fontFamily: "Open Sans, sans-serif" }}>Projects</h1><br />        
        <div className='projects d-flex m-5'>
            {projects.map(el => {
                return <div style={{ backgroundColor: "rgb(166, 225, 250)" }} className=" w-25 p-3 mx-3">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2 className=' tech-stack-title font-Roboto mt-2  mr-3' style={{ color: textColor, fontFamily: "Open Sans, sans-serif", fontSize: "20px", fontWeight: 700 }}>{el.name}</h2>
                        <h5 className='font-disabled position-relative t-2'>{el.created_at}</h5>
                    </div>
                    <button style={{ backgroundColor: "#85B7D5" }} className='btn m-2'><a href={el.site_link} target="_blank" className='fw-semibold ' rel="noreferrer" style={{ textDecoration: "none", color: textColor }}>Site Link</a></button>
                </div>
            })}
        </div>
        </>
    )
}

export default Projects