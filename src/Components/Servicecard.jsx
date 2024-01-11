import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom';

const Servicecard = ({ title, imagesrc, description, btnname }) => {
    return (

        <div className="card card-side min-h-[45vh] md:max-h-[45vh] max-w-[100vh] bg-base-100 shadow-xl transition-all duration-300 hover:scale-90 bg-custom-color border">
            <div className='grid sm:grid-rows-2 md:grid-cols-2 h-full w-full p-2 m-2 gap-2'>
                <div className="flex items-center h-[30vh] md:h-[35vh] w-[30vh] m-auto">
                    <img src={imagesrc} alt="Movie" className='m-auto w-full h-full' />
                </div>
                <div className="card-body min-h-[10vh] md:max-h-[40vh]">
                    <h2 className="card-title text-white text-2xl">{title}</h2>
                    <p className='text-white'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Servicecard