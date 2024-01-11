import React from 'react'

const AboutDivider = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row space-x-2">
            <div className="grid flex-grow card bg-yellow-400 rounded-box place-items-center">
                <h1 className='font-bold'>Long-Term Solar Relations</h1>
                <p>Our solar services have been<br></br> explicitly designed to help<br></br> you & to make long-term<br></br> relationships and business<br></br> connections between solar<br></br> companies, homeowners and<br></br> businesses.</p>
            </div>
            <div className="divider lg:divider-horizontal "></div>
            <div className="grid flex-grow card bg-yellow-400 rounded-box place-items-center">
                <h1 className='font-bold'>Solar Professionals You Can Trust</h1>
                <p>We have an in-house team<br></br> of solar engineers &<br></br>designers who can help you<br></br> manage all aspects of your<br></br> solar energy project<br></br> including Sales proposals,<br></br> prelim designs, engineering<br></br> letters & permitting.</p>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="grid flex-grow card bg-yellow-400 rounded-box place-items-center">
                <h1 className='font-bold'>Satisfaction Guaranteed</h1>
                <p>One stop shop for all Solar<br></br> related services. We are here<br></br>to help you hit your target<br></br> and provide utilities that help<br></br>smooth out the learning<br></br> curve in this leading industry.</p>
            </div>
        </div>
    )
}

export default AboutDivider
