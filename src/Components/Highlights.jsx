import React from 'react'
import Highlightcard from './Highlightcard'
import Video from './Video'
import {FaSolarPanel} from 'react-icons/fa'
import DividerDiv from './DividerDiv'

export const Highlights = () => {
    return (
        <>
        <div className="min-h-[90vh] flex flex-col bg-gradient-to-l from-purple-950 to-black justify-center items-center">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2 mb-3 gap-2 lg:gap-4 h-full">
                <Highlightcard title={"Accelerating Turnaround Time"} description={"Your approved plans will be delivered in less than 6 hours!"} imagesrc={"https://imgur.com/Yn3NhYH.png"} />
                <Highlightcard title={"Round-the-Clock Excellence"} description={"Seamless 24/7 Services at Your Fingertips"} imagesrc={"https://imgur.com/arjd6B6.png"} />
                {/* https://imgur.com/6t3Y2xO.png */}
                <Highlightcard title={"Best Accuracy and Quality"} description={"Secure Approval with Our 98% AHJ Success Rate for Your Plans!"} imagesrc={"https://imgur.com/fuTNRTo.png"} />
                <Highlightcard title={"A Dedicated Team"} description={"Your Projects designed with a dedicated team of quality engineers."} imagesrc={"https://imgur.com/LEfph3N.png"} />
            </div>
            
        </div>
        </>
    )
}

export default Highlights
