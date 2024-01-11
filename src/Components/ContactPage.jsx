import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
const ContactPage = () => {
    const handleClick = () => {
        const phoneNumber = '2096825630'; // Replace with your actual WhatsApp number
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
    };
    return (
        <div className='bg-custom-color text-white'>
            <h1 className="text-3xl text-center mt-24 text-white">ContactUs</h1>
            <div className="hero min-h-screen justify-normal">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">WE`D LOVE TO HEAR FROM YOU</h1>
                        <p className="py-6 text-xl"> "Don't wait, The time will never be just right." - Napolean Hill</p>
                        <button className="btn btn-warning" onClick={handleClick}><FaWhatsapp size={25} />Add</button>
                        <p className="py-3 text-2xl font-bold"> ONE PLACE SOLAR PVT. LTD.</p>
                        <p className="text-xl py-3"> 2-A/3, Kundan Mansion, Asaf Ali Rd, Delhi 110002</p>
                        <a href='tel:209 682 5630'><p className="text-xl py-3"> +1 209 682 5630</p></a>
                        <a href={`mailto:info@oneplacesolar.com/`} target="_blank"><p className="text-xl py-3 cursor-pointer">info@oneplacesolar.com</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
