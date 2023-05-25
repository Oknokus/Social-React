import PropTypes from 'prop-types';
import { useContext } from 'react';

import {changeImg} from "../../function/function";

import { CustomContext } from '../../hoockHelper/Context';


import styles from './PersonPhoto.module.css';


const PersonPhoto = (e) => {
    return (        
        <>
            <h1>NAME</h1>
            <input type="file" onClick={(e) => changeImg(e)}/>
            <img src={localStorage.getItem("myPhoto")} alt="rrr" />            
        </>
    )
}

export default PersonPhoto;