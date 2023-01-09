import React from 'react';

const ProductCard = ({ product, setProduct }) => {
    const { _id, productName, picture, originalPrice, reSellPrice, sellerName, yearOfUse, postedTime } = product;
    return (
        <section>
            <div className="card card-compact w-80 bg-base-200 shadow-xl">
                <figure><img className='bg-base-00 w-72 p-1 rounded-2xl mt-3' src={picture} alt="Shoes" /></figure>
                <div className="card-body font-semibold">
                    <h2 className="text-2xl text-success font-bold text-center">{productName}</h2>
                    <h4 className='text-xl'>Seller: <span className='font-bold text-warning'>{sellerName}</span></h4>
                    <div className='text-base'>
                        <p>Original Price: ${originalPrice}</p>
                        <p>Resell Price: ${reSellPrice}</p>
                        <p>Used Time(year): {yearOfUse}</p>
                        <p>Posted Date: {postedTime}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <label onClick={() => setProduct(product)} htmlFor="booking-modal" className="btn btn-warning text-white">Book Now</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCard;