import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Registration from '../Pages/Registration';

const Main = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
                <div class="col-span-3">
                    <Registration></Registration>
                    <Outlet></Outlet>
                </div>
            </div>
    );
};

export default Main;