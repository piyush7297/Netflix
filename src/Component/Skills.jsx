import React from 'react'

export default function Skills() {
  return (
    <>
        <div className='w-[1320px] mx-auto rounded-[10px] mt-4'>
            <h2 className='mt-4 font-bold text-[30px]'>Skills</h2>
            <div className="row">
                <div className='grid grid-cols-4 mt-5 p-4'>
                    <div className=' hover:bg-[rgb(80,188,186)] hover:font-bold hover:text-black rounded-[20px] text-center py-4'><img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt=""  className='w-[150px] mx-auto rounded-[10px]'/><h2 className='mt-4'>React.js</h2></div>
                    <div className=' hover:bg-[rgb(80,188,186)] hover:font-bold hover:text-black rounded-[20px] text-center py-4'><img src="https://ih1.redbubble.net/image.367014180.4385/st,small,507x507-pad,600x600,f8f8f8.u3.jpg" alt="" className='w-[150px] mx-auto rounded-[10px]' /><h2 className='mt-4'>Node JS</h2></div>
                    <div className=' hover:bg-[rgb(80,188,186)] hover:font-bold hover:text-black rounded-[20px] text-center py-4'><img src="https://files.codingninjas.in/article_images/custom-upload-1688934051-df5a481a.webp" className='w-[200px] mx-auto rounded-[10px]' alt=""  /><h2 className='mt-4'>ExpressJS</h2></div>
                    <div className=' hover:bg-[rgb(80,188,186)] hover:font-bold hover:text-black rounded-[20px] text-center py-4'><img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" className='w-[150px] mx-auto rounded-[10px]' alt="" /><h2 className='mt-4'>Mongo DB</h2></div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-4 mt-5 p-4'>
                    <div className=' hover:bg-[rgb(80,188,186)] hover:font-bold hover:text-black rounded-[20px] text-center py-4'><img src="https://static.vecteezy.com/system/resources/thumbnails/001/416/705/small_2x/html5-emblem-orange-shield-and-white-text-vector.jpg" alt="" className='w-[150px] mx-auto rounded-[10px]' /><h2 className='mt-4'>HTML</h2></div>
                    <div className=' hover:bg-[rgb(80,188,186)] hover:font-bold hover:text-black rounded-[20px] text-center py-4'><img src="https://www.svgrepo.com/show/452185/css-3.svg" alt="" className='w-[150px] mx-auto rounded-[10px]' /><h2 className='mt-4'>CSS</h2></div>
                    <div className=' hover:bg-[rgb(80,188,186)] hover:font-bold hover:text-black rounded-[20px] text-center py-4'><img src="https://brandlogos.net/wp-content/uploads/2016/06/bootstrap-logo-vector-download.jpg" alt="" className='w-[150px] mx-auto rounded-[10px]' /><h2 className='mt-4'>Bootstrap</h2></div>
                    <div className=' hover:bg-[rgb(80,188,186)] hover:font-bold hover:text-black rounded-[20px] text-center py-4'><img src="https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj" alt="" className='w-[150px] mx-auto rounded-[10px]' /><h2 className='mt-4'>Tailwind CSS</h2></div>
                    
                </div>
            </div>
        </div>
        <hr className='mt-6' />
    </>
  )
}
