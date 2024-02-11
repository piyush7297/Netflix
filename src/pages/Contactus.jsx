import React from 'react'
import Header from '../Common/Header'
import { image } from '..'

export default function Contactus() {
  return (
    
    <div className='bg-[rgb(24,33,58)] text-white pb-[135px]'>
        <Header/>
        <div className='w-[1320px] mx-auto'>
            <div className='row mt-5 flex'>
                <div className='grid grid-cols-[400px,70%] '>
                    <div className=''>
                        <h2 className='font-bold text-[40px]'>Contact-Me</h2>
                        <p className='font-bold ms-1'>Hi,contact-me on these platforms</p>
                        <div className='flex mt-5'>
                            <img src="https://www.shutterstock.com/image-vector/phone-icon-trendy-flat-style-600nw-1189157305.jpg" style={{width:'50px'}} alt="" />
                            <span className='mt-1 ms-2'>7297825537</span>
                        </div>
                        <div className='flex mt-2'>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/006/827/459/small/email-icon-sign-symbol-logo-vector.jpg" style={{width:'50px'}} alt="" />
                            <span className='mt-1 ms-2'>ps72978255@gmail.com</span>
                        </div>
                        <div className='flex mt-2'>
                            <img src="https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg"  style={{width:'50px'}} alt="" />
                            <span className='mt-2 ms-2'> <a href='https://www.instagram.com/im_sharma_ji_25_?igsh=MTh6cWU2NjFjdmczYw=='>im_sharma_ji_25</a></span>
                        </div>
                        <div className='flex  mt-2'>
                            <img src="https://pbs.twimg.com/profile_images/378800000041711687/d6050eb6ce3f141847fe200a914205bc_400x400.png" style={{width:'50px'}} alt="" />
                            <span className='mt-2 ms-2'><a href='https://x.com/leader7297?s=21'>@leader7297</a></span>
                        </div>
                        <div className='flex mt-2'>
                            <img src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-net2o24e.png" style={{width:'40px'}} alt="" />
                            <span className='mt-1 ms-4'><a href='https://www.linkedin.com/in/piyush-sharma-437484291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>Piyush Sharma</a></span>
                        </div>

                    </div>
                </div>
            </div>
            </div>

        </div>
  )
}
