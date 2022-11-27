import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = ({ category }) => {
    const { _id, name, description, image } = category;

    return (
        <div className="card w-80 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Category: {name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <Link to={`/category/${_id}`} className="btn btn-primary">View All Product</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;