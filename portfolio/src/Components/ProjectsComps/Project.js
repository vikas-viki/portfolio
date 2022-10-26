import React from 'react';

const Project = (props) => {
  let { data } = props
  return (
    <div class="bg-white shadow-md border border-gray-100 rounded-lg max-w-xs dark:bg-gray-800 dark:border-gray-700">
      <a href="demo-link">
        <img class="rounded-t-lg" src={data.src} alt="" />
      </a>
      <div class="p-5">
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{data.title}</h5>
        <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">{data.description}</p>
        <div className='flex justify-between p-x-3'>
        <a href={data.gitRepo} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Git repo
        </a>
        <a href={data.demoLink} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Live Demo
        </a>
        </div>
      </div>
    </div>

  )
}

export default Project