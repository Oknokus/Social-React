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
            <span className={styles.personInfo_container_span}>
                <h3>{`${userState.name} ${userState.surName}`}</h3>
                <img 
                    className={styles.personInfo_container_img}
                    src={userState.url} alt="personImg" />
            </span>
            
            <h5>Phone: {userState.phone}</h5> 
            <button
                className={styles.personInfo_container_btn} 
                onClick={() => goOut()}>Выйти
            </button>                   
        </div>
    )
}

export default PersonInfo;