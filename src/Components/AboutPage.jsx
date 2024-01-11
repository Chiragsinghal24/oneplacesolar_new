import React from 'react'
import Profilecard from './Profilecard'
import DividerDiv from './DividerDiv'

const AboutPage = () => {
    return (
        <div className='bg-custom-color'>
            <h1 className="text-3xl text-center mt-24 text-white">Meet Our Leadership Team</h1>
            <div className="grid grid-cols-1 sm:w-screen md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mt-2 p-2">
                <Profilecard name={"Aman Asija"} profile={"Chief Executive Officer"} imageurl={"https://imgur.com/MUzgZq2.png"} link={"aman-asija-072598189"} emailname={"Aman"} />
                <Profilecard name={"Kunal Singh Bisht"} profile={"Chief Operating Officer"} imageurl={"https://imgur.com/9JLLSZB.png"} link={"kunalsinghbisht"} emailname={"Kunal"} />
                <Profilecard name={"Rishabh Sharma"} profile={"Chief Marketing Officer"} imageurl={"https://imgur.com/olRf1gz.png"} link={"rishabh-sharma-15909b158"} emailname={"Rishabh"} />
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://imgur.com/N16zDuj.png" style={{ width: '400px', height: '400px' }} />

                    <div>
                        <h1 className="text-3xl text-center text-white sm:ml-40">About Us</h1>
                        <p className="py-6 text-white">One place solar is a <b className='text-xl'>One-stop solution</b> that provides solar design &
                            engineering-related services to solar businesses such as prelim production
                            reports, permit designs, as-builts, PE stamps, Interconnection, Permitting,
                            Monitoring & PTO Applications. One Place Solar has trained and certified
                            energy specialists that can help you get the most from your solar power
                            system, even if you have no experience with solar energy. We provide each
                            business unique production simulation reports where we determine best
                            location to generate the most electric power, using state of the art simulation
                            software such as Aurora Solar, Helioscope, Scanifly and PVWatts. We provide
                            advice on how to improve your existing systems, or install a new or completely
                            off-grid system. We design, install and manage full systems and sometimes
                            setup hybrid systems (solar/traditional grid) which can be monitored by you
                            and non-technical users in a convenient way. Our Solar Permits help the
                            business owner to apply for a permit and get the appropriate sized solar
                            panels installed. We will also help them with any other related services.
                            We are a group of solar professionals that been in the solar business for over
                            a decade. We have the experience and expertise to ensure the proper and
                            necessary steps are taken to help your solar business succeed. We can help
                            with all aspects of your solar business.<br></br></p>
                        <p className="py-2 text-white"><b className='text-xl'>Mission:</b> We strive to offer our customers finest quality solar services at the
                            utmost convenience.<br></br></p>
                        <p className="py-2 text-white"><b className='text-xl'>Vision:</b> To be USA's most efficient solar services company, where customers
                            can find and discover all the solar services at one place.<br></br></p>
                        <p className="py-2 text-white"><b className='text-xl'>Company Policy:</b> As a full-service solar power system design provider, we
                            deliver solar electric system designs to residential and commercial solar
                            installers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
