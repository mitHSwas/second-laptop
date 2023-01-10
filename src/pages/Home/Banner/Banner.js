import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../../assets/images/banner/banner1.jpg'
import banner2 from '../../../assets/images/banner/banner2.jpg'
import banner3 from '../../../assets/images/banner/banner3.jpg'
import banner4 from '../../../assets/images/banner/banner4.jpg'
const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="carousel w-full overflow-hidden">
                <div id="item1" className="carousel-item w-full py-5 md:py-8 lg:py-16">
                    <div className="hero py-2 md:py-5 lg:py-10 bg-base-100">
                        <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
                            <div className='w-full lg:w-1/2'>
                                <img src={banner1} className="w-full rounded-lg shadow-2xl" alt="" />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-success text-center my-3 md:my-4 lg:my-5">Hardware-City</h1>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warning">Resell or Buy Second Hand Laptop Accessories.</h2>
                                <p className="py-6 lg:text-xl font-semibold">We are the most trusted and leading online marketplace for buying and selling your used laptop hardware parts in Bangladesh.</p>
                                <Link to="/" className="btn btn-warning text-white">All Category</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full py-5 md:py-8 lg:py-16">
                    <div className="hero bg-base-100 py-2 md:py-5 lg:py-10">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='w-full lg:w-1/2'>
                                <img src={banner2} className="w-full rounded-lg shadow-2xl" alt="" />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-success text-center my-3 md:my-4 lg:my-5">Hardware-City</h1>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warning">Resell or Buy Second Hand Laptop Accessories.</h2>
                                <p className="py-6 lg:text-xl font-semibold">We are the most trusted and leading online marketplace for buying and selling your used laptop hardware parts in Bangladesh.</p>
                                <Link to="/" className="btn btn-warning text-white">All Category</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full py-5 md:py-8 lg:py-16">
                    <div className="hero bg-base-100 py-2 md:py-5 lg:py-10">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='w-full lg:w-1/2'>
                                <img src={banner3} className="w-full rounded-lg shadow-2xl" alt="" />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-success text-center my-3 md:my-4 lg:my-5">Hardware-City</h1>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warning">Resell or Buy Second Hand Laptop Accessories.</h2>
                                <p className="py-6 lg:text-xl font-semibold">We are the most trusted and leading online marketplace for buying and selling your used laptop hardware parts in Bangladesh.</p>
                                <Link to="/" className="btn btn-warning text-white">All Category</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full py-5 md:py-8 lg:py-16">
                    <div className="hero bg-base-100 py-2 md:py-5 lg:py-10">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='w-full lg:w-1/2'>
                                <img src={banner4} className="w-full rounded-lg shadow-2xl" alt="" />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-success text-center my-3 md:my-4 lg:my-5">Hardware-City</h1>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warning">Resell or Buy Second Hand Laptop Accessories.</h2>
                                <p className="py-6 lg:text-xl font-semibold">We are the most trusted and leading online marketplace for buying and selling your used laptop hardware parts in Bangladesh.</p>
                                <Link to="/" className="btn btn-warning text-white">All Category</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;