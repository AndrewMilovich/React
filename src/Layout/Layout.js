import React from 'react';
import {NavLink} from "react-router-dom";
import {Outlet} from "react-router-dom";

import './Layout.css'
const Layout = () => {
    return (
        <div >
            <div className={'header'}><NavLink className={'text'} to={'/'}>Rick and Morty!</NavLink></div>
            <Outlet/>
        </div>
    );
};

export default Layout;