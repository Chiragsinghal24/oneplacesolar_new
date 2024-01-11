import React from 'react'
import Servicecard from './Servicecard';
import Servicepagecard from './servicepagecard';

const ServicePage = () => {
  return (
    <div className='bg-custom-color'>
      <h1 className="text-3xl text-center mt-24 text-white">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        <Servicepagecard title={"Solar Permit Designs"} imagesrc={"https://imgur.com/SdyeBou.png"} description={"We specialize in rapid solar permit plans for Residential and Commercial systems, delivering property site plans, solar panel layouts, electrical diagrams, and compliance with NEC, AHJ, and HOA requirements within a 6-hour turnaround time."} />
        <Servicepagecard title={"Solar Sales Proposals"} imagesrc={"https://imgur.com/4HeMAcF.png"} description={" Our solar proposals let you educate your customers about solar and quickly configure your solar estimate. We provide both Residential & Commercial system sales proposals within 2 hours turn around time. We highlight production estimate, pricing, return on investment, financing, incentives, Installation overview, Hardware and specification of the system etc. in our detailed sales proposals."} />
        <Servicepagecard title={"Solar Preliminary Designs"} imagesrc={"https://imgur.com/uEqK3DV.png"} description={"Our preliminary design and production analysis reports will help customers to calculate the Annual Production and Shading, and ensure they will be receiving optimal power production. We provide both Residential & Commercial system preliminary designs within 2 hours turn around time. We use AuroraSolar, Helioscope & Scanifly integrated, web based application to simulate the physical layout, power production, offsets and design of your recommended system based on your current information and goals.  "} />
        <Servicepagecard title={"Engineering Stamps"} imagesrc={"https://imgur.com/BdDFPra.png"} description={" Our highly experienced professional engineers can help you with permitting, building department review and Professional Engineer Certification as per NEC, NESC, NFPA 70E, IEEE, ANSI and NEMA standards.Our Professional Engineer can review, Sign and Stamp Engineering Plan Sets & provide Reports & Calculations Permit Compliance Letters & Calculations, Power System Studies. We offer in-house Structural & Electrical engineering services for both Residential and Commercial projects within 6-24 Hours."} />
        <Servicepagecard title={"As-Built Drawings"} imagesrc={"https://imgur.com/8pY0LMS.png"} description={" Our As Built prelim & permit plan shows the actual installed solar system based on the post installation pictures. We provide As Built Drawings, final prelim & permit designs within 6 hours turn around time. Also, we get them approved by our in house engineering services team. "} />
        <Servicepagecard title={"PTO & Interconnection"} imagesrc={"https://imgur.com/3HB4EF0.png"} description={" Our Solar Consultant team help you in further process after engineering stamp, Whether they are submitting interconnection, permitting, monitoring & permission to operate(PTO) applications. We assist in getting permit plan approval from the Utility & AHJ as quick as possible."} />
      </div>
    </div>
  )
}

export default ServicePage;
