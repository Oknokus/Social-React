import PropTypes from 'prop-types';


import styles from './PersonInfo.module.css';


const PersonInfo = ({userState, setActive}) => {
    console.log(userState.id)
    return (
        <div className={styles.personInfo_container}>        
            <h1>{userState.login}</h1>      
        </div>
    )
}

export default PersonInfo;