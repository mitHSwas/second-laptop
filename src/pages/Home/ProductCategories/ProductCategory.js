import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = ({ categories }) => {
    const { name, image, category } = categories;

    return (
        <Link to={`/category/${category}`} className="card w-56 bg-base-200 shadow-xl py-5">
            <figure className="">
                <img src={image} alt="Shoes" className="rounded-xl w-48" />
            </figure>
            <div className="text-center mt-3">
                <button className="btn btn-sm btn-warning text-white">{name}</button>
            </div>
        </Link>
    );
};

export default ProductCategory;