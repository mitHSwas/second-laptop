import React from 'react';
import Banner from '../Banner/Banner';
import FeatureInfo from '../FeatureInfo/FeatureInfo';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <FeatureInfo></FeatureInfo>
        </div>
    );
};

export default Home;