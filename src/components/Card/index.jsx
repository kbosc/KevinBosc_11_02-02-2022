import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Card(props) {
    return (
        <div>
            <div className='Gallery'>
                <Link to="/housing/:id">Card</Link>
            </div>
            <Outlet />
        </div>
    );
}