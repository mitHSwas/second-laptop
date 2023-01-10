import React from 'react';
import Step1 from '../../../assets/images/workingProcess/account.gif';
import Step2 from '../../../assets/images/workingProcess/order.gif';
import Step3 from '../../../assets/images/workingProcess/payment.gif';
import Step4 from '../../../assets/images/workingProcess/pickUp2.gif';

const WorkingProcess = () => {
    return (
        <div className='container mx-auto mt-10'>
            <h1 className='mx-auto text-center text-3xl md:text-4xl lg:text-5xl font-bold text-success pb-14'>How Hardware City Works:</h1>
            <div className='grid w-full gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='mx-auto'>
                    <div className="avatar w-full">
                        <div className="w-36 mx-auto rounded-full">
                            <img src={Step1} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl text-center font-semibold'>Step - 1</h3>
                        <p className='text-center font-semibold w-4/5 mx-auto'>Signup or login as a seller/buyer</p>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className="avatar w-full">
                        <div className="w-36 rounded-full mx-auto">
                            <img src={Step2} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl text-center font-semibold'>Step - 2</h3>
                        <p className='text-center font-semibold w-4/5 mx-auto'>Order product as buyer or add product as seller.</p>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className="avatar w-full">
                        <div className="w-36 mx-auto rounded-full">
                            <img src={Step3} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl text-center font-semibold'>Step - 3</h3>
                        <p className='text-center font-semibold w-4/5 mx-auto'>Make or received payment.</p>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className="avatar w-full">
                        <div className="w-36 mx-auto rounded-full">
                            <img src={Step4} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl text-center font-semibold'>Step - 4</h3>
                        <p className='text-center font-semibold w-4/5 mx-auto'>Get ready to deliver or received product.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;