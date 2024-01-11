import React from 'react'
import Download from './Download'

const DesignSamples = () => {
    return (
        <div className='bg-custom-color min-h-screen'>
            <h1 className="text-3xl text-center mt-24 text-white">Design Samples</h1>
            <div className="grid md:grid-cols-2 mx-auto gap-8 my-8 max-w-[100vh] justify-center">
                <Download Documentname={"Rooftop PV_Design Sample"} fileUrl={"https://img1.wsimg.com/blobby/go/0de2bdbc-be2d-497c-b317-07e3062e16da/downloads/Rooftop%20PV%20%2B%20Battery_Design%20Sample.pdf?ver=1693653977799"} />
                <Download Documentname={"Rooftop PV + Battery_Design Sample"} fileUrl={"https://img1.wsimg.com/blobby/go/0de2bdbc-be2d-497c-b317-07e3062e16da/downloads/Rooftop%20PV%20%2B%20Battery_Design%20Sample.pdf?ver=1693653977799"}/>
                <Download Documentname={"Ground Mount + Battery_Design Sample"} fileUrl={"https://img1.wsimg.com/blobby/go/0de2bdbc-be2d-497c-b317-07e3062e16da/downloads/Ground%20Mount%20%2B%20Battery_Design%20Sample.pdf?ver=1693653977799"}/>
                <Download Documentname={"Solar Sales Proposal design"} fileUrl={"https://img1.wsimg.com/blobby/go/0de2bdbc-be2d-497c-b317-07e3062e16da/downloads/Solar%20Sales%20Proposal_Sample.pdf?ver=1693653977799"}/>
                <Download Documentname={"Aurorasolar Production Report_Sample"} fileUrl={"https://img1.wsimg.com/blobby/go/0de2bdbc-be2d-497c-b317-07e3062e16da/downloads/Aurorasolar%20Production%20Report_Sample.pdf?ver=1693653977799"}/>
                <Download Documentname={"Helioscope Production Report_Sample"} fileUrl={"https://img1.wsimg.com/blobby/go/0de2bdbc-be2d-497c-b317-07e3062e16da/downloads/Helioscope%20Production%20Report_Sample.pdf?ver=1693653977799"}/>
                <Download Documentname={"Helioscope Shading Report_Sample"} fileUrl={"https://img1.wsimg.com/blobby/go/0de2bdbc-be2d-497c-b317-07e3062e16da/downloads/Helioscope%20Shading%20Report_Sample.pdf?ver=1693653977799"}/>
            </div>
        </div>
    )
}

export default DesignSamples
