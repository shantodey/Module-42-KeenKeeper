import React from 'react';
// import { FaInstagram,FaFacebookF,FaXTwitter  } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#244d3f] text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h1 className="text-4xl font-bold mb-3">KeenKeeper</h1>
                    <p className="text-sm text-gray-300 mb-8">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <p className="mb-4 text-sm">Social Links</p>

                    <div className="flex justify-center gap-4 mb-10">
                        <a className="bg-white h-10 w-10 flex justify-center items-center ">
                            {/* <FaInstagram /> */}
                        </a>
                        <a className="bg-white h-10 w-10 flex justify-center items-center">
                            {/* <FaFacebookF /> */}
                        </a>
                        <a className="bg-white h-10 w-10 flex justify-center items-center">
                           {/* <FaXTwitter /> */}
                        </a>

                    </div>
                    <span className='border-2 w-full'></span>
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 gap-4">
                        <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>

                        <div className="flex gap-6">
                            <a className="hover:text-white cursor-pointer">Privacy Policy</a>
                            <a className="hover:text-white cursor-pointer">Terms of Service</a>
                            <a className="hover:text-white cursor-pointer">Cookies</a>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;