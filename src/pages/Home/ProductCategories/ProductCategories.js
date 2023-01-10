import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import ProductCategory from './ProductCategory';

const ProductCategories = () => {
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://y-tau-six.vercel.app/categories');
            const data = res.json();
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto grid'>
            <h2 className="mx-auto my-5 md:my-8 lg:my-14 font-bold text-3xl md:text-4xl lg:text-5xl text-success">Product Category: </h2>
            <div className='grid mx-auto gap-4 grid-cols-2 z-10 md:grid-cols-3 lg:grid-cols-5 mb-7'>
                {
                    categories?.map(category => <ProductCategory
                        key={category._id}
                        categories={category}
                    ></ProductCategory>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;