import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import ProductCategory from './ProductCategory';

const ProductCategories = () => {
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = res.json();
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto grid'>
            <h2 className="mx-auto mb-10 font-bold text-4xl">All Category Of Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-7'>
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