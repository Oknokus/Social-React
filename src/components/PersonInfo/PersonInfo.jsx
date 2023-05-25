import PropTypes from 'prop-types';
import { useContext } from 'react';
import {useNavigate} from "react-router-dom"


import styles from './PersonInfo.module.css';


import { CustomContext } from '../../hoockHelper/Context';


const PersonInfo = () => {  
    const navigate = useNavigate();
    
    const{
        userState      
    } = useContext(CustomContext);

    const goOut = () => { 
        localStorage.removeItem("user") ;
        localStorage.removeItem("myPhoto"); 
        navigate("/register")
    };    
      
return ( 
        <div className={styles.personInfo_container}>  
            <h1>{`${userState.name} ${userState.surName}`}</h1>
            <img src={userState.url} alt="personImg" />
            <p>Phone: {userState.phone}</p> 
            <button onClick={() => goOut()}>Выйти</button>                   
        </div>
    )
}

export default PersonInfo;