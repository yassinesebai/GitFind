import React from 'react'
import githubcat from '../githubcat.webp'

function About() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 py-14 gap-4'>
        <div className='col-span-2 pt-5 px-12'>
            <h1 className='text-6xl mb-4'>GitFind.</h1>
            <p className='mb-3 text-lg font-light'>
            A React app to search GitHub profiles and see profile details. This
            project was built to learn different React basic concepts while using the github third party API.
            And it was developed by
            <strong>
                <a href='https://github.com/yassinesebai'> <i>Yassine Sebai</i></a>
            </strong>
            .
            </p>
            <p className='text-lg text-gray-400'>
            ✅ Version<span className='pl-2 text-white'>1.0.0</span>
            </p>
            <p className='text-lg text-gray-400'>
            👨‍💻 Created by<span className='pl-2 text-white'>Yassine Sebai</span>
            </p>
        </div>
        <div className='px-12 lg:block hidden'>
            <img width={300} src={githubcat} alt="" />
        </div>
    </div>
  )
}

export default About
