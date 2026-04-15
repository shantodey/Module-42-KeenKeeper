import React from 'react';
import PrimaryButton from '../Component/PrimaryButton';
import { FiPlus } from "react-icons/fi";
const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-48 pt-20">
            <div className="hero-content text-center">
                <div >
                    <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                    <p className="py-6">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                        relationships that matter most.
                    </p>
                    <PrimaryButton><FiPlus />Add a Friend</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Hero;