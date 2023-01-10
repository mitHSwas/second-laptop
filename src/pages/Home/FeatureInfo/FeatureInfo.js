import React from 'react';
import { GiSelfLove } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import FeatureCard from './FeatureCard';
const FeatureInfo = () => {
    const infoCards = [
        {
            icon: <GiSelfLove></GiSelfLove>,
            title: "User Interface & Experience",
            description: "Mobile Optimized Design & Incredible Design/UI/UX, keep your store looking fresh and perfect.",
        },
        {
            icon: <FiSettings></FiSettings>,
            title: "Easy to Use and Implement",
            description: "We analyze, then support you the best methods for any necessary processes or features make your website operate stably and smoothly.",
        },
        {
            icon: <BsTelephone></BsTelephone>,
            title: "Outstanding Support",
            description: "Get the best technical support around! If you have questions or problems, just Contact us, we're here to help!",
        }
    ]
    return (
        <div className='container grid mx-auto'>
            <h2 className="mx-auto my-5 md:my-8 lg:my-14 text-success font-bold text-3xl md:text-4xl lg:text-5xl">Our Highlighted Features</h2>
            <div className='grid gap-2 md:gap-5 lg:gap-10 mb-5 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    infoCards.map((card, i) => <FeatureCard
                        card={card}
                        key={i}
                    ></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default FeatureInfo;