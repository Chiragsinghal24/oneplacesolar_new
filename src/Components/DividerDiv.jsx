import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom';

const DividerDiv = ({ title, description }) => {
    return (
        <>
            <div className="pt-4 grid sm:grid-flow-row lg:grid-flow-col bg-gray-900">
                <div className='text-center md:text-left lg:mx-[15vh] sm:max-w-[100vh] lg:w-[100vh]'>
                    <h1 className="text-3xl mb-8 font-semibold text-white">
                        {title}
                    </h1>
                    <p className='sm:max-w-[40vh] sm:mx-auto text-white lg:max-w-[200vh] mb-5 p-2'>{description}</p>
                </div>
                {/* <div className='mb-2 sm:justify-center mx-auto p-2'>
                    <button className='btn bg-blue-950 rounded-3xl text-white'><Link to="/contact">Connect Us<GoArrowUpRight size={22} /></Link></button>
                </div> */}
            </div>

        </>
    )
}

export default DividerDiv