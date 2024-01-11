import React from 'react'

const Highlightcard = ({ title, description, imagesrc }) => {
    return (
        <>

            <div className="card card-side w-[40vh] max-h-[70vh] bg-neutral text-neutral-content hover:opacity-50 rounded-lg glass relative">
                <div className="card-body flex flex-col text-white gap-2 md:gap-4">

                    <div className='text-center flex justify-center min-h-[10vh]'>
                        <h2 className="card-title text-md sm:text-2xl md:text-md text-center">{title}</h2>
                    </div>
                    
                    <div className='text-center flex justify-center min-h-[11vh]'>
                        <p className='text-center text-md md:text-2xl lg:text-xl'>{description}</p>
                    </div>
                    
                    <div className='text-center justify-center m-auto '>
                        <img src={imagesrc} className='min-w-[140px] min-h-[140px] rounded-lg' alt="Card Background" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Highlightcard



