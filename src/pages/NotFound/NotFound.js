import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from '../../assets/images/404/download.png'

const NotFound = () => {
    return (
        <div className='my-8'>
            <img className='container w-4/6 rounded mx-auto grid align-middle items-center' src={ErrorImg} alt="" />
            <p className='container w-1/6 mt-5 mx-auto grid align-middle items-center'><Link className='btn btn-warning' to='/'>Home</Link></p>
        </div>
    );
};

export default NotFound;