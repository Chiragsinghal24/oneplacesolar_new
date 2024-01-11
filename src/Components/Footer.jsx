import React from "react";
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineLinkedin, AiOutlineYoutube } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        // <footer className="footer items-center p-4 bg-neutral text-neutral-content mt-auto">
        //     <div className="items-center grid-flow-col">
        //         <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clip-rule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
        //         <p>Copyright © OnePlaceSolar-All rights reserved</p>
        //     </div>
        //     <div className="grid-flow-col mx-auto md:mx-0 gap-4 md:place-self-center md:justify-self-end">
        //         <a href="https://www.instagram.com/oneplacesolar/" target="_blank"><BsInstagram size={30} /></a>
        //         <a href="https://www.linkedin.com/company/one-place-solar/" target="_blank"><AiOutlineLinkedin size={30} /></a>
        //         <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FOnePlaceSolar" target="_blank"><FiTwitter size={30} /></a>
        //         <a href="https://www.youtube.com/@oneplacesolar" target="_blank"><AiOutlineYoutube size={33} /></a>
        //     </div>
        // </footer>
        <footer className="footer p-10 text-base-content bg-footer-colour">
            <aside className="text-white">
                <Link to="/">
                    <img src="https://imgur.com/9lGWnlu.png'" width="300px">
                </img>
                </Link>
                <p>All your solar services at one place</p>
                <a href="" className="footer-title">info@oneplacesolar.com</a>
                <p className="footer-title">+1 209 682 5630</p>
                <div className="flex flex-row md:mx-0 gap-2 md:place-self-center md:justify-self-start">
                    <a href="https://www.instagram.com/oneplacesolar/" target="_blank"><BsInstagram size={30} /></a>
                    <a href="https://www.linkedin.com/company/one-place-solar/" target="_blank"><AiOutlineLinkedin size={30} /></a>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FOnePlaceSolar" target="_blank"><FiTwitter size={30} /></a>
                    <a href="https://www.youtube.com/@oneplacesolar" target="_blank"><AiOutlineYoutube size={33} /></a>
                </div>
            </aside>
            <nav className="text-white">
                <header className="footer-title">Services</header>
                <Link to="/service" className="link link-hover">Sales proposals</Link>
                <Link to="/service" className="link link-hover">Permit Plans</Link>
                <Link to="/service" className="link link-hover">PTO</Link>
                <Link to="/service" className="link link-hover">As-Built Drawings</Link>
            </nav>
            <nav className="text-white">
                <header className="footer-title">Company</header>
                <Link to="/about" className="link link-hover">About us</Link>
                <Link to="/contact" className="link link-hover">Contact Us</Link>
                <Link to="/careers" className="link link-hover">Jobs</Link>
                <Link to="/designs" className="link link-hover">Design Samples</Link>
            </nav>
            <nav className="text-white">
                <header className="footer-title">Legal</header>
                <Link to="/privacy" className="link link-hover">Privacy policy</Link>
                <Link to="/serviceagreement" className="link link-hover">Service Agreement</Link>
            </nav>
        </footer>
    )
}

export default Footer;