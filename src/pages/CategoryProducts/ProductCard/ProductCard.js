import React from 'react';

const ProductCard = ({ product, setProduct }) => {
    const { _id, productName, picture, originalPrice, reSellPrice, sellerName, yearOfUse, postedTime } = product;
    return (
        <section>
            <div className="card card-compact w-80 bg-base-200 shadow-xl">
                <figure><img className='bg-base-00 p-1 rounded-2xl' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <h4 className='text-xl'>Seller:{sellerName}</h4>
                    <p>Original Price: ${originalPrice}</p>
                    <p>Resell Price: ${reSellPrice}</p>
                    <p>Used Time(year): {yearOfUse}</p>
                    <p>Posted Date: {postedTime}</p>
                    <div className="card-actions justify-center">
                        <label onClick={() => setProduct(product)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCard;