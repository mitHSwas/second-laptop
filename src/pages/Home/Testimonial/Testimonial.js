import React from 'react';

const Testimonial = () => {
    return (
        <section className="container mx-auto my-8 bg-zinc-50">
            <h1 className="my-5 md:my-8 lg:my-14 text-3xl md:text-4xl lg:text-5xl font-bold leading-none text-center text-success">What our customers are saying about us</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 items-center justify-center">
                <div className="flex mx-auto flex-col w-72 lg:w-80 my-3 shadow-lg">
                    <div className="py-8 px-3 rounded-t-lg bg-base-100">
                        <p className="relative px-4 py-3 text-lg italic text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>Best service ever! I have been using this service for 2 years now and I am very happy with the service. I would recommend this service to anyone who is looking for a good service
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 pb-4 rounded-b-lg bg-yellow-200 text-gray-900">
                        <img src="https://i.ibb.co/5WSTn6K/hero-01.jpg" alt="" className="w-20 h-20 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700" />
                        <p className="text-xl font-semibold leading-tight">Rasel Sajib</p>
                        <p className="text-sm uppercase">SOFTWARE ARCHITECT</p>
                    </div>
                </div>
                <div className="flex flex-col w-72 lg:w-80 mx-auto my-3 shadow-lg">
                    <div className="py-8 px-3 rounded-t-lg bg-base-100">
                        <p className="relative px-4 py-3 text-lg italic text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>I think it's a great platform to buy or resell second hand hardware parts. Their service is so good. Besides, this site provide ample of discounts for students. So it's really very cheap you can't even imagine!!!
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 pb-4 rounded-b-lg bg-yellow-200 text-gray-900">
                        <img src="https://i.ibb.co/tMrmSyM/juan-ramos-EWN0rrwb-BIQ-unsplash.jpg" alt="" className="w-20 h-20 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700" />
                        <p className="text-xl font-semibold leading-tight">Anikha Tabassum</p>
                        <p className="text-sm uppercase">Business Person</p>
                    </div>
                </div>
                <div className="flex flex-col w-72 lg:w-80 mx-auto my-3 shadow-lg">
                    <div className="py-8 px-3 rounded-t-lg bg-base-100">
                        <p className="relative px-4 py-3 text-lg italic text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>As a business person i know which is the best option for me for selling used product. Hardware city give me that opportunity which is actually looking for! I appreciate their services.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 pb-4 rounded-b-lg bg-yellow-200 text-gray-900">
                        <img src="https://i.ibb.co/8XnyHS9/marten-bjork-6d-W3xy-Qvc-YE-unsplash.jpg" alt="" className="w-20 h-20 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700" />
                        <p className="text-xl font-semibold leading-tight">Amit Costa</p>
                        <p className="text-sm uppercase">BUSINESS PERSON</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;