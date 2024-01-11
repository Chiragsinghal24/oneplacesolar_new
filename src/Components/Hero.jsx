import { GoArrowUpRight } from 'react-icons/go'
import DividerDiv from './DividerDiv';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero min-h-screen pt-16 flex-1 bg-gradient-to-l from-purple-950 to-black overflow-x-hidden relative">
            <video className="opacity-80 absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                playsInline
                muted>
                <source src="video.mp4" type="video/mp4" />
            </video>
            {/* //    //includee the photo in it remove the bg
        //    <div className='relative'>
        //         <img src='aman_sir.jpg'></img> */}
            <div className="hero-content p-0 flex-col lg:flex-row-reverse w-full">
                {/* <div style={{ position: 'relative', width: '320px', height: '240px' }} className='mb-3'>
                    <video width="320" height="240" autoPlay loop playsInline muted style={{ position: 'absolute', top: 54, left: 0 }}>
                        <source src="video.mp4" type="video/mp4" />
                    </video>

                    <img src='laptop2.png' className='h-21'></img>
                </div> */}
                <div className="md:max-w-md p-4 text-center md:text-left lg:mr-20 w-full h-full">
                    <h1 className="text-3xl lg:text-5xl font-bold text-white">Prelim to PTO<br /><span className="text-warning font-bold">At One Place</span></h1>
                    <p className="py-6 max-w-md mx-auto lg:mx-0 text-white text-10xl">Your Premier Solar Destination for Expert Plans, Engineering Reviews, PTO, and Permits, Crafted by Certified Design and Engineering Professionals.</p>
                    <div className="buttons-box grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                        <button className="btn btn-primary text-white"><svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 26 32.001" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 32.001" height="32" width="26" data-type="color" role="presentation" aria-hidden="true">
                            <g className="mr-auto">
                                <path fill="#F1B550" d="M16.9 13.849c.04.06.06.14.06.22 0 .08-.02.16-.06.24-.02.06-.08.12-.12.18l-4.12 4.103c-.1.12-.26.18-.4.18-.16 0-.3-.06-.42-.18L9.98 16.75c-.1-.1-.16-.26-.16-.42 0-.14.06-.301.16-.421.12-.1.28-.16.42-.16.16 0 .32.06.42.16l1 1a.607.607 0 0 0 .82 0l3.28-3.281c.06-.06.12-.1.2-.14.08-.02.16-.04.24-.04.08 0 .14.02.22.06.08.04.14.08.2.14.04.06.1.12.12.2Z" data-color="1"></path>
                                <path fill="#F1B550" d="M25.86 6.064c-.08-.22-.22-.42-.38-.58L20.52.52c-.16-.16-.36-.3-.58-.38-.22-.1-.46-.14-.68-.14H1.78c-.24 0-.46.04-.68.14C.88.22.68.36.52.52.36.68.22.88.14 1.1a1.6 1.6 0 0 0-.14.681V30.24c0 .22.04.46.14.68.08.2.22.4.38.56.16.18.36.3.58.4.22.081.44.121.68.121H24.2c.48 0 .92-.18 1.26-.5.34-.32.52-.76.54-1.221V6.744c0-.24-.04-.46-.14-.68Zm-5.12 7.384c-.26 2.042-.88 4.003-1.88 5.784a12.364 12.364 0 0 1-5.14 5.043l-.36.18-.74.02-.96-.54a12.246 12.246 0 0 1-4.52-4.683 16.2 16.2 0 0 1-2-6.924c-.06-.5-.06-1 0-1.481 0-.1 0-.08.24-.1 1.88-.18 3.7-.76 5.34-1.681.76-.46 1.48-.96 2.18-1.501.02-.02.06-.04.08-.04.04 0 .06.02.08.04l.56.44c1.54 1.14 3.3 1.961 5.18 2.421.6.14 1.22.22 1.84.3.16 0 .22.08.22.22.04.841 0 1.682-.12 2.502Z" data-color="1"></path>
                            </g>
                        </svg><Link to="/service">Plan Set</Link></button>
                        <button className="btn btn-primary text-white"><svg preserveAspectRatio="xMidYMid meet" data-bbox="-0.001 0.5 20.002 32.999" xmlns="http://www.w3.org/2000/svg" viewBox="-0.001 0.5 20.002 32.999" height="34" width="20" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                            <g>
                                <path fill="#6158EF" d="M2.035 6.573 8.993.858a1.569 1.569 0 0 1 1.996 0l6.957 5.715c.387.319.62.837.62 1.354v10.554c0 .955-.736 1.712-1.628 1.712H3.043c-.891 0-1.628-.776-1.628-1.712V7.927c0-.517.233-1.015.62-1.354Z" data-color="1"></path>
                                <path fill="#6158EF" d="m15.485 28.019-4.07-2.37-.795 1.434c-.58 1.035-1.821 1.553-2.887 1.075-1.221-.558-1.686-2.05-1.047-3.206l1.841-3.325-.872.02c-1.589.04-3.042.936-3.837 2.37l-2.848.02A.978.978 0 0 0 0 25.051l.04 5.058c0 .557.445 1.015.988 1.015l3.682-.02 3.662 2.13c.95.558 2.152.2 2.694-.756.717.418 1.609.16 2.016-.577l.736-1.315.213.12a.738.738 0 0 0 1.008-.279l.736-1.314c.175-.398.059-.896-.29-1.095ZM20 29.313l-.039-5.058c0-.557-.445-1.015-.988-1.015l-3.682.02-1.667-.976a6.125 6.125 0 0 0-3.333-.836c-.33.02-.64.219-.814.517L7.56 25.45a1.292 1.292 0 0 0 .465 1.732c.6.339 1.337.14 1.686-.477l1.356-2.45 4.922 2.868a1.773 1.773 0 0 1 .64 2.409l-.426.777 2.848-.02c.524.04.95-.419.95-.976Z" data-color="1"></path>
                            </g>
                        </svg><Link to="/service">Shade Analysis</Link></button>
                        <button className="btn btn-primary text-white"><svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 23 32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 32" height="32" width="23" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                            <g>
                                <path fill="#BE9AFA" d="M13.597 5.754 11.649 8.18l-1.53-1.27.29-.345 1.175.976 1.66-2.066.353.28Z" data-color="1"></path>
                                <path fill="#BE9AFA" d="M0 2.526A2.532 2.532 0 0 1 2.537 0h17.926A2.532 2.532 0 0 1 23 2.526v26.948A2.532 2.532 0 0 1 20.463 32h-3.791l-.014-3.237h.689c.366 0 .689-.31.689-.704.021-.197-.065-.373-.237-.526l-5.5-4.923a.707.707 0 0 0-.452-.154c-.15 0-.323.022-.473.176l-5.521 4.9a.72.72 0 0 0-.216.527c0 .397.302.704.69.704h.69v1.526c-.002.02-.002.042-.002.062V32H2.537A2.532 2.532 0 0 1 0 29.474V2.526Zm5.022 12.182a.506.506 0 1 0 0 1.01h13.642a.506.506 0 1 0 0-1.01H5.022Zm-.508 3.873c0-.279.227-.505.508-.505h9.132a.506.506 0 1 1 0 1.01H5.022a.506.506 0 0 1-.508-.505Zm7.328-15.213a.221.221 0 0 0-.112.03L8.573 5.194a.225.225 0 0 0-.113.195v.324c0 .99.324 1.954.923 2.745.6.791 1.44 1.366 2.397 1.638.04.012.084.012.124 0a4.578 4.578 0 0 0 2.397-1.638c.6-.79.924-1.754.924-2.745v-.324a.225.225 0 0 0-.114-.195l-3.157-1.796a.226.226 0 0 0-.112-.03Z" clip-rule="evenodd" fill-rule="evenodd" data-color="1"></path>
                                <path fill="#BE9AFA" d="M13.217 29.857V32H10.46v-2.143c0-.389.308-.702.689-.702h1.378c.381 0 .689.313.689.701Z" data-color="1"></path>
                            </g>
                        </svg><Link to="/service">PE Stamp</Link></button>
                        <button className="btn btn-primary text-white"><svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0.5 34 31.001" xmlns="http://www.w3.org/2000/svg" viewBox="0 0.5 34 31.001" height="32" width="34" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                            <g>
                                <path fill="#78DBF3" d="m17 .5 5.276 6.315h-4.104A1.16 1.16 0 0 1 17 5.667V.5Z" data-color="1"></path>
                                <path fill="#78DBF3" d="M0 2.796C0 1.528 1.05.5 2.345.5h11.818c.38 0 .749.09 1.078.257V7.39a1.16 1.16 0 0 0 1.173 1.148h5.695c.11.268.167.556.167.85v2.595H9.379a1.16 1.16 0 0 0-1.172 1.148v12.63a1.16 1.16 0 0 0 1.172 1.147h12.897v2.297c0 1.268-1.05 2.296-2.345 2.296H2.345C1.05 31.5 0 30.472 0 29.204V2.796Z" data-color="1"></path>
                                <path fill="#78DBF3" d="M15.493 19.703h1.084c.812 0 1.223-.362 1.223-.973 0-.619-.41-.98-1.223-.98h-1.084v1.953Z" data-color="1"></path>
                                <path fill="#78DBF3" d="M25.912 19.502c0 1.069.772 1.8 1.798 1.8 1.025 0 1.797-.731 1.797-1.8 0-1.07-.772-1.8-1.797-1.8-1.026 0-1.798.73-1.798 1.8Z" data-color="1"></path>
                                <path fill="#78DBF3" d="M11.138 13.704a1.16 1.16 0 0 0-1.172 1.148v9.185a1.16 1.16 0 0 0 1.172 1.148h21.69A1.16 1.16 0 0 0 34 24.037v-9.185a1.16 1.16 0 0 0-1.172-1.148h-21.69Zm3.026 2.985h2.487c1.534 0 2.494.78 2.494 2.041 0 1.254-.96 2.034-2.494 2.034h-1.158v1.55h-1.33V16.69Zm8.29 5.626h-1.33V17.75h-1.838v-1.061h5.006v1.06h-1.838v4.566Zm8.399-2.813c0 1.68-1.338 2.91-3.143 2.91-1.814 0-3.144-1.238-3.144-2.91 0-1.672 1.33-2.91 3.144-2.91 1.805 0 3.143 1.23 3.143 2.91Z" clip-rule="evenodd" fill-rule="evenodd" data-color="1"></path>
                            </g>
                        </svg><Link to="/service">Permitting</Link></button>
                        <div className="flex flex-row gap-12 mt-8 w-full">
                            <button className="btn btn-primary rounded-3xl"><Link to="/contact">Contact Us</Link><GoArrowUpRight size={24} /></button>
                            <button className="btn btn-primary rounded-3xl"><Link to="/about">about Us</Link><GoArrowUpRight size={24} /></button>
                        </div>
                    </div>

                    <div className='flex mt-10 w-full justify-center'>
                        <button className="btn btn-primary rounded-3xl text-white">
                            <a href="https://docs.google.com/forms/d/1tms2OKyRGsV6bF8tFYqOkw0aGWsMjqF-3zCjJnloAOs/viewform?edit_requested=true">Submit Design Request Here!</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;