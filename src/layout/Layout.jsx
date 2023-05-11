import PropTypes from 'prop-types';

import { Outlet } from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";


import styles from './Layout.module.css';


const Layout = () => {
    return (
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    )
}


export default Layout;