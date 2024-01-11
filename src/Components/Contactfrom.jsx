import React from 'react'
import { useState } from 'react';


  
const ContactForm = () => {

    const handleClick = () =>{
        alert("Succesfully submitted");
    }
    
    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-l from-purple-950 to-black p-4">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-10 rounded-sm bg-custom-color">
                <form action="https://send.pageclip.co/kBZQMs3zvG9ftvD71YjeihaYR79aRmSo/contact-form" method="post" className="card-body w-full pageclip-form" >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" name='name' placeholder='Ex.OnePlaceSolar' className="input input-bordered bg-custom-color-hero hover:border-blue-400 text-white border-white border-opacity-20" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" name='email' placeholder='name@gmail.com' pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" className="input input-bordered bg-custom-color-hero hover:border-blue-400 text-white border-white border-opacity-20" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Phone No.</span>
                        </label>
                        <input type="text" name='phone' placeholder="10-digits" pattern='\d{10}' className="input input-bordered bg-custom-color-hero hover:border-blue-400 text-white border-white border-opacity-20" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white ">Address</span>
                        </label>
                        <input type="text" name="address" placeholder="current address" className="input input-bordered bg-custom-color-hero hover:border-blue-400 text-white border-white border-opacity-20" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Average Solar Projects Count</span>
                        </label>
                        <input type="text" name="projectsCount" placeholder='number' className="input input-bordered bg-custom-color-hero hover:border-blue-400 text-white border-white border-opacity-20" pattern="[0-9]*" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Other related requirements</span>
                        </label>
                        <input type="text" placeholder='necessary requirement' name="requirements" className="input input-bordered bg-custom-color-hero hover:border-blue-400 text-white border-white border-opacity-20" required />
                    </div>
                    <input type='text' value="Contact-Form" hidden></input>
                    <div className="form-control mt-6">
                        <button className="btn btn-warning pageclip-form__submit" type='submit' onSubmit={handleClick}>get Quote</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
