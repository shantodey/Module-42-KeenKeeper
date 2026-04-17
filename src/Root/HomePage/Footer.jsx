import React from 'react';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { TfiFacebook } from 'react-icons/tfi';

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
                        <a className="tooltip tooltip-bottom  w-10 h-10 rounded-full bg-white   flex items-center justify-center text-black hover:bg-[#244d3f] hover:text-white border transition-all duration-100 cursor-pointer hover:border-white/30 hover:-translate-y-1">
                            <BsInstagram />
                        </a>
                        <a className="tooltip tooltip-bottom  w-10 h-10 rounded-full bg-white   flex items-center justify-center text-black hover:bg-[#244d3f] hover:text-white border transition-all duration-100 cursor-pointer hover:border-white/30 hover:-translate-y-1">
                            <TfiFacebook />
                        </a>
                        <a className="tooltip tooltip-bottom  w-10 h-10 rounded-full bg-white   flex items-center justify-center text-black hover:bg-[#244d3f] hover:text-white border transition-all duration-100 cursor-pointer hover:border-white/30 hover:-translate-y-1">
                          <BsTwitterX />
                        </a>

                    </div>
                    <div className="border-t  mx-auto border-[#225946] mt-10 pt-10 max-w-278 flex items-center justify-between flex-col md:flex-row gap-4">
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