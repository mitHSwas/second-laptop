import React from 'react';

const ProductCategory = ({ category }) => {
    const { id, name, description, image } = category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Category: {name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">View All Product</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;