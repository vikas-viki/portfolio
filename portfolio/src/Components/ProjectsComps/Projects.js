import React from 'react';
import Project from "./Project";
import projects from './Projects-info';

const Projects = () => {
  return (
    <div className='p-10 flex gap-x-9'>
      {projects.map((el, index)=>{
        return <Project key={index} data={el}/>
      })}
    </div>
  )
}

export default Projects