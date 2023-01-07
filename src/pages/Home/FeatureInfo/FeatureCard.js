import React from 'react';

const FeatureCard = ({ card }) => {
    const { icon, title, description } = card;
    return (
        <div className="card w-80 bg-base-200 shadow-xl hover:bg-success hover:text-white mx-auto">
            <div className=" mx-auto card-body items-center text-center">
                <p className='px-5 pt-5 text-7xl hover:text-white text-red-600'>{icon}</p>
                <h2 className="card-title text-3xl font-semibold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;