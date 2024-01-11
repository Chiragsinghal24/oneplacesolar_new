import React from 'react'

export const Faqs = () => {
    return (
        <div className='max-w-100px space-y-3'>
            <div className="collapse collapse-plus bg-blue-300 rounded-none bg-custom-color opacity-90 hover:bg-white hover:bg-opacity-10">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium text-white">
                    What reports are provided for Solar proposals & prelim design?
                </div>
                <div className="collapse-content text-white">
                    <p>Using Aurora Solar & Helioscope, reports are generated that provide best viable location <br></br>known to be such that irradiance, energy and other input parameters are most favorable.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-blue-300 rounded-none bg-custom-color opacity-90 hover:bg-white hover:bg-opacity-10">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium text-white">
                Do you guys make Solar permits for storage systems as well?
                </div>
                <div className="collapse-content text-white">
                    <p>We can provide permits for residential houses including for pitch roofs, flat roofs,<br></br> carports & ground mounts as well. Including On-grid, Off-grid, Solar + Storage systems.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-blue-300 rounded-none bg-custom-color opacity-90 hover:bg-white hover:bg-opacity-10">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium text-white">
                Do you guys make Solar permits for storage systems as well?
                </div>
                <div className="collapse-content text-white">
                    <p>We can provide permits for residential houses including for pitch roofs, flat roofs,<br></br> carports & ground mounts as well. Including On-grid, Off-grid, Solar + Storage systems.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-blue-300 rounded-none bg-custom-color opacity-90 hover:bg-white hover:bg-opacity-10">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium text-white">
                Can we get engineering approval for the permits?
                </div>
                <div className="collapse-content text-white">
                    <p>We can have engineering stamping approved permits from a Professional structural<br></br> engineer as well as Electrical engineer.</p>
                </div>
            </div>
        </div>
    )
}

export default Faqs
