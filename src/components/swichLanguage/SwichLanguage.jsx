import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import i18n from '../../utils/i18Next';


import styles from './SwichLanguage.module.css';


const SwichLanguage = () => {
    const {t, i118n} = useTranslation
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    };

    return (
        <div className={styles.swichLanguage_container} >
            <button
                className={styles.swichLanguage_bnt}
                onClick={() => changeLanguage("ru")}>
                "ru"
            </button>

            <button
                className={styles.swichLanguage_bnt}
                onClick={() => changeLanguage("en")}>
                "en"
            </button>
        </div>
    )
};

export default SwichLanguage;