import React from 'react';

const ContractForm = () => {
    return (
        <section className='container mx-auto w-full bg-zinc-50 my-10'>
            <h2 className="mx-auto text-center text-success font-bold my-5 md:my-8 lg:my-14 text-3xl md:text-4xl lg:text-5xl">What's on your mind?</h2>
            <div className='p-8 w-full lg:w-3/5 mx-auto'>
                <form action="https://formsubmit.co/6b76c06778f8fd792be654b793dcca17" method="POST" className='font-semibold'>
                    <div className='grid gap-5 grid-cols-1 lg:grid-cols-2'>
                        <div className="form-control w-full">
                            <label className="label mr-2">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="Name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label mr-2">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="email" name="Email" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text" name="Subject" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text">Message*</span>
                        </label>
                        <textarea name="Message" className="textarea textarea-bordered h-32" required></textarea>
                    </div>
                    <button className='btn btn-warning btn-outline mt-5' type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContractForm;