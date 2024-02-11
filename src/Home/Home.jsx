import React from 'react'

import Header from '../Common/Header'
import Skills from '../Component/Skills'
import About from '../Component/About'
import Projectsection from '../Component/Projectsection'

export default function Home() {
  return (
    <>
    <div className='bg-[rgb(24,33,58)] text-white'>
        <Header/> 
        <About/>
        <Skills/>
        <Projectsection/>
      </div>
        
    </>
  )
}
