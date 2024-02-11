import React from 'react'
import { Link } from "react-router-dom";
import img1 from '../images/Screenshot 2023-11-04 at 9.46.29 PM.png'


export default function Header() {
    return (
        <>
            <div className='max-w-[1320px] mx-auto py-5'>
                <div className="row">
                    <div className="grid grid-cols-4  items-center">
                        <div className='flex'>
                            <span>
                                <img className='rounded-[50%] border-[rgba(80,188,186)] border-[1px] p-2' src={img1} style={{width:'80px'}} alt="" /> 
                            </span>
                            <h2 className='flex items-center font-bold text-[rgba(80,188,186)] text-[30px] ms-4 '>Piyush Sharma</h2>
                        </div>
                        
                        <div className='hover:bg-[rgb(80,188,186)] hover:text-black rounded-[10px] text-center w-[300px] h-[30px] font-bold'>
                        <Link to={'/portfolio'}>Portfolio</Link>
                        </div>
                        <div className='hover:bg-[rgb(80,188,186)] hover:text-black rounded-[10px] text-center w-[300px] h-[30px] font-bold'><Link to={'/projects'}>Projects</Link></div>
                        <div className='hover:bg-[rgb(80,188,186)] hover:text-black rounded-[10px] text-center w-[300px] h-[30px] font-bold'>
                        <Link to={'/contact'}>Contact-Me</Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
