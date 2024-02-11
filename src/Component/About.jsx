import React from 'react'
import { image } from '..'

export default function About() {
  return (
    <>
        <div className='max-w-[1320px] mx-auto '>
            <h2 className='mt-4 font-bold text-[30px]'>About Me</h2>
            <div className='grid grid-cols-[300px,50%] mt-4'>
            <div className='w-[250px] h-[290px] bg-[rgba(81,133,168,0.89)] p-1 border-[81,133,168,0.89)] border-[2px] rounded-[20px]'>
                <img src={image} alt=" " className='rounded-[20px]  ' />
            </div>
            <div className='mt-4'>Hey , Piyush here ...
Proficient MERN Stack Developer with extensive experience in developing robust and scalable web applications using MongoDB, Express.js, React.js, and Node.js. Demonstrated expertise in front-end and back-end development, adept at crafting efficient RESTful APIs, and implementing responsive user interfaces. Strong problem-solving skills and a passion for staying updated with the latest technologies and best practices in web development.</div>
            </div>
        </div>
        <hr className='mt-6'/>
    </>
  )
}
