import React from 'react';
import Banner from '../Banner/Banner';
import ContractForm from '../ContractForm/ContractForm';
import FeatureInfo from '../FeatureInfo/FeatureInfo';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <FeatureInfo></FeatureInfo>
            <ContractForm></ContractForm>
        </div>
    );
};

export default Home;