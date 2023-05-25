import PropTypes from 'prop-types';
import { Outlet, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { CustomContext } from '../../hoockHelper/Context';

import Header from "./Header";
import Footer from "./Footer";

import PersonInfo from "../../components/PersonInfo";

 
import styles from './LayOut.module.css';


const LayOut = () => {
    const navigate = useNavigate();
    const{
        userState      
    } = useContext(CustomContext);

    if(userState  === undefined) {
        navigate("/register")        
    }

    return (
        <>
            <Header />
            {/* <PersonInfo /> */}
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export default  LayOut;