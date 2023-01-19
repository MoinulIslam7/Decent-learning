import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Registration from '../Pages/Registration';

const Main = () => {
    return (
        <div className='lg:mx-40 mt-5 font-manrope'>
            <Navbar></Navbar>
            <Registration></Registration>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;