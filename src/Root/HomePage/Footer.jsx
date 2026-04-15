import React from 'react';

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
                        <a className="bg-white text-[#244d3f] p-2 rounded-full hover:scale-110 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </a>
                        <a className="bg-white text-[#244d3f] p-2 rounded-full hover:scale-110 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>
                        <a className="bg-white text-[#244d3f] p-2 rounded-full hover:scale-110 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.53 3h3.47l-7.58 8.66 8.92 11.34h-6.99l-5.48-6.9-6.04 6.9h-3.47l8.1-9.26-8.56-10.74h7.16l4.96 6.33 5.51-6.33z" />
                            </svg>
                        </a>

                    </div>
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