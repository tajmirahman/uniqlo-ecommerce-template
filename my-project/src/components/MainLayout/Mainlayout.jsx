import React from 'react';
import Header from '../Header/Header';
import Navber from '../Navber';

const Mainlayout = () => {
    return (
        <div className='px-10 '>
            <div className='bg-gradient-to-r from-gray-200 to-white'>
                <Header></Header>
                <Navber></Navber>
            </div>
        </div>
    );
};

export default Mainlayout;