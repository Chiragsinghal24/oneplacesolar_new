import React from 'react'
import Aboutus from './Aboutus'
import Highlights from './Highlights'
// import Carousel from './Carousel'
import Services from './Services'
import Faqssection from './Faqssection'
import ContactForm from './Contactfrom'
import Hero from './Hero'
import DividerDiv from './DividerDiv'
import LocationImage from './LocationImage'

const Home = () => {
    return (
        <>
            <Hero />
            <DividerDiv title="Key Highlights That Define Us" description="Seize command of your project with our user-friendly workflow tailored for your solar energy requirements" />
            <Highlights />
            <DividerDiv title="Discover & Secure Premium Services Now!" description="From site assessment to as-built drawings, we've got you covered on a single, seamless platform" />
            <Services />
            <DividerDiv title="Frequently Asked Question" description="Questions asked by the users"></DividerDiv>
            <Faqssection />
            <DividerDiv title="Empowering USA’s future for a greener tomorrow" description="Your go-to solar store, igniting projects nationwide. A household name in the US solar industry, powering the future." />
            {/* <Aboutus /> */}
            <LocationImage />
            <DividerDiv title="Get an Estimate!" description="Fill in the form below and our expert will get in touch with you." />
            <ContactForm />
        </>
    )
}

export default Home