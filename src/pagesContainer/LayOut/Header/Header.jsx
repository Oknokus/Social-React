import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import SwichLanguage from "../../../components/SwichLanguage";

import {CgLogOff} from "react-icons/cg";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineBell} from "react-icons/ai";
import {BsChevronDoubleDown} from "react-icons/bs";
import {MdAddAPhoto} from "react-icons/md";


import styles from './Header.module.css';


const Header = () => {
    const {t} = useTranslation();
    return (
        <div className={styles.header__container}>
            <div className={styles.header__container_navigate_left}>
                <div className={styles.header__container__logoItem}>
                    <span className={styles.header__container__logo}><CgLogOff /></span>
                    <h2>Go, go...</h2>
                </div>
    
                <label className={styles.header__container_label}>
                    <span className={styles.header__container_searchImg}><AiOutlineSearch/></span>
                    <input className={styles.header__container_searchInput} type="text" placeholder={t(`header.field`)} />
                </label>
                
                <span className={styles.header__container_bell}><AiOutlineBell/></span>                 
            </div>

            <SwichLanguage />
                                 
            <div className={styles.header__container_navigate_right}>
                <span className={styles.header__container_personImg}><MdAddAPhoto/></span>
                <span className={styles.header__container_personInfo}><BsChevronDoubleDown/></span>
            </div>
               
        </div>
    )
}


export default Header;