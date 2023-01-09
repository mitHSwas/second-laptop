import React from 'react';
import Banner from '../Banner/Banner';
import ContractForm from '../ContractForm/ContractForm';
import FeatureInfo from '../FeatureInfo/FeatureInfo';
import ProductCategories from '../ProductCategories/ProductCategories';
import Testimonial from '../Testimonial/Testimonial';
import WorkingProcess from '../WorkingProcess/WorkingProcess';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <FeatureInfo></FeatureInfo>
            <WorkingProcess></WorkingProcess>
            <Testimonial></Testimonial>
            <ContractForm></ContractForm>
        </div>
    );
};

export default Home;