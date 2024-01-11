import React from 'react'

const CareerPage = () => {

    const handleClick = () =>{
        alert("Your application was submitted successfully");
    }

    const handleFile = () =>{
        let file=document.getElementById("my_file");
        let message = document.getElementById("file_name");

        file.addEventListener("input",() =>{
            if(file.files.length){
                let filename=file.files[0].name;
                message.innerHTML=`${filename}`;
            }
            else{
                message.innerHTML="please select a file";
            }
        })
    }

    return (
        <div className='bg-custom-color'>
            <h1 className="text-3xl text-center mt-24 text-white">We`re Hiring</h1>
            <p className='text-center text-white'>Apply now</p>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-10 rounded-sm bg-custom-color">
                    <form action="https://send.pageclip.co/kBZQMs3zvG9ftvD71YjeihaYR79aRmSo/contact-form" method="post" className="card-body w-full pageclip-form" >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name='name' className="input input-bordered bg-custom-color-hero hover:border-blue-400 text-white border-white border-opacity-20" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' className="input input-bordered bg-custom-color-hero hover:border-blue-400 text-white border-white border-opacity-20" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Phone No.</span>
                            </label>
                            <input type="text" name="phone" pattern='\d{10}' className="input input-bordered bg-custom-color-hero hover:border-blue-400 text-white border-white border-opacity-20" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white ">Message</span>
                            </label>
                            <input type="text" name="message" className="input input-bordered bg-custom-color-hero hover:border-blue-400 text-white border-white border-opacity-20" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Resume</span>
                            </label>
                            <input type="file" name="requirements" id='my_file' onClick={handleFile} className="input bg-custom-color-hero hover:border-blue-400 text-white border-white border-opacity-20" required />
                        </div>

                        <input type='text' value="Hiring-Form" hidden></input>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning pageclip-form__submit" onClick={handleClick}>SUBMIT APPLICATION</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CareerPage