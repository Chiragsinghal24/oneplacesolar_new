import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom';

const Servicepagecard = ({title,imagesrc,description,btnname }) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl transition-all duration-300 hover:scale-90 bg-custom-color border">
            <div className='grid sm:grid-flow-row lg:grid-flow-col place-items-center'>
            <div className="w-[35vh] ml-2 sm:mt-0">
                <img src={imagesrc} alt="Movie" className='m-auto mt-2'/>
            </div>
            <div className="card-body">
                <h2 className="card-title text-white">{title}</h2>
                <p className='text-white min-h-[21vh]'>{description}</p>
            </div>
            </div>
        </div>
    )
}

export default Servicepagecard