import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductCard from '../ProductCard/ProductCard';

const CategoryProducts = () => {
    const products = useLoaderData();
    const [product, setProduct] = useState(null)
    return (
        <section className='container mx-auto my-10'>
            <p>Hello</p>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setProduct={setProduct}
                    >

                    </ProductCard>)
                }
                {
                    product && <BookingModal
                        product={product}
                        setProduct={setProduct}
                    ></BookingModal>
                }
            </div>
        </section>
    );
};

export default CategoryProducts;