import React from 'react';
import { GiSelfLove } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import FeatureCard from './FeatureCard';
const FeatureInfo = () => {
    const infoCards = [
        {
            icon: <GiSelfLove></GiSelfLove>,
            title: "UI/UX",
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
        <div className='grid my-10'>
            <h2 className="mx-auto mb-10 font-bold text-4xl">Our Highlighted Features</h2>
            <div className='grid gap-8 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto container'>
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