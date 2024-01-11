import React from 'react'
import Servicecard from './Servicecard'


const Services = () => {
    return (
        <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-l from-purple-950 to-black opacity-90">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-8 p-4 gap-10">
                <Servicecard title={"Solar Permit Designs"} imagesrc={"https://imgur.com/SdyeBou.png"} description={"Swift solar permit plans: residential, commercial, NEC compliance, 6-hour turnaround."} btnname={"Explore Now"}/>
                <Servicecard title={"Solar Sales Proposals"} imagesrc={"https://imgur.com/4HeMAcF.png"} description={"Fast solar proposals: residential, commercial, detailed estimates, financing, incentives, installation overview."}btnname={"Explore Now"} />
                <Servicecard title={"Solar Preliminary Designs"} imagesrc={"https://imgur.com/uEqK3DV.png"} description={"Swift preliminary designs: residential, commercial, optimize power, using top applications."}btnname={"Explore Now"} />
                <Servicecard title={"Engineering Stamps"} imagesrc={"https://imgur.com/BdDFPra.png"} description={"Experienced engineers for permitting, certification, and reviews: NEC, NESC, NFPA."}btnname={"Explore Now"} />
                <Servicecard title={"As-Built Drawings"} imagesrc={"https://imgur.com/8pY0LMS.png"} description={"Swift As-Built plans: installed solar system drawings, approved within 6 hours."}btnname={"Explore Now"} />
                <Servicecard title={"PTO & Interconnection"} imagesrc={"https://imgur.com/3HB4EF0.png"} description={"Consultant team aids post-stamp processes: interconnection, permitting, monitoring, and PTO applications."}btnname={"Explore Now"} />
            </div>
        </div>
    )
}

export default Services
