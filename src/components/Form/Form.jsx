import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


import {CustomContext} from "../../hoockHelper/Context";
import DownLoadBtn from "../DownLoadBtn";


import styles from './Form.module.css';


const Form = () => { 
    const location = useLocation();

    const {
        onSubmitForm        
    } = useContext(CustomContext); 

    const {
        register,
        handleSubmit,
            formState: {
                errors
        }
    } = useForm({mode: "onblur"}); 
       
 
    return (
        <div className={styles.form_container}>
           
            <form
                className={styles.form_container_form}
                onSubmit={handleSubmit(onSubmitForm)} noValidate>
                 
                <h1 className={styles.form_container_title}>
                    {
                        location.pathname === "/register" ? "Регистрация" : "Вход"
                    } 
                </h1>

                    {
                        location.pathname === "/register" ? 
                <>
                    <label className={styles.form_container_label}>
                        <span className='login-container__form__errors'>{errors.name && errors.name.message}</span> 
                    
                        <input {...register("name", {
                                    required : {
                                        message: "Заполните поле",
                                        value: true
                                    },
                                    maxLength : {
                                        message: "Максимальное количество символов 10",
                                        value: 10 
                                    }, 
                                    minLength : {
                                        message: "Минимальное количество символов 3",
                                        value: 3
                                    }
                                })} 
                        className={styles.form_container_input} 
                        type="text" placeholder='Ввeдите Имя' />
                    </label>

                    <label className={styles.form_container_label}>
                        <span className='login-container__form__errors'>{errors.surName && errors.surName.message}</span> 
                    
                        <input {...register("surName", {
                                    required : {
                                        message: "Заполните поле",
                                        value: true
                                    },
                                    maxLength : {
                                        message: "Максимальное количество символов 10",
                                        value: 10 
                                    }, 
                                    minLength : {
                                        message: "Минимальное количество символов 3",
                                        value: 3
                                    }
                                })} 
                        className={styles.form_container_input} 
                        type="text" placeholder='Ввeдите Фамилию' />
                    </label>

                    <label className={styles.form_container_label}>
                        <span className='login-container__form__errors'>{errors.email && errors.email.message}</span> 
                        
                        <input {...register("email", {
                                    required : {
                                        message: "Заполните поле",
                                        value: true
                                    },
                                    pattern : {
                                        message: "Заполните поле правильно",
                                        value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                    } 
                                })}  
                        className={styles.form_container_input} 
                        type="email" placeholder='Введите Email' />
                    </label>

                    <label className={styles.form_container_label}>
                        <span className='login-container__form__errors'>{errors.phone && errors.phone.message}</span> 
                        
                        <input {...register("phone", {
                                    required : {
                                        message: "Введите телефон",
                                        value: true
                                    }                                    
                                })}  
                        className={styles.form_container_input} 
                        type="tel"  placeholder='Введите Телефон' />
                    </label>

                    <label className={styles.form_container_label}>
                        <span className='login-container__form__errors'>{errors.birsday && errors.birsday.message}</span> 
                    
                        <input {...register("birsday", {
                                    required : {
                                        message: "Заполните поле",
                                        value: true
                                    },
                                    maxLength : {
                                        message: "Максимальное число символов 10",
                                        value: 10 
                                    }, 
                                    minLength : {
                                        message: "Минимальное число символов 4",
                                        value: 4
                                    }
                                })}  
                        className={styles.form_container_input} 
                        type="date" placeholder='Введите дату Рождения' />
                    </label>

                    <div className={styles.form_container_gender}>
                        <div>
                            <input {...register("gender", {
                                    required : {
                                        message: "Выберите пол",
                                        value: true
                                    }
                                })}   
                                type="radio"
                                name='gender'
                                value="men"
                                id='men' />

                            <label htmlFor="men">Men</label>
                        </div>

                        <div>
                        <input {...register("gender", {
                                    required : {
                                        message: "Выберите пол",
                                        value: true
                                    }
                                })}   
                                type="radio"
                                name='gender'
                                value="women"
                                id='women' />

                            <label htmlFor="women">Women</label>
                        </div>
                    </div>

                    <label className={styles.form_container_label}>
                        <span className='login-container__form__errors'>{errors.password && errors.login.password}</span> 
                    
                        <input {...register("password", {
                                    required : {
                                        message: "Заполните поле",
                                        value: true
                                    },
                                    maxLength : {
                                        message: "Максимальное число символов 10",
                                        value: 10 
                                    }, 
                                    pattern : {
                                        message: "Пароль  должен содержать не мение 8 символов, заглавную букву, число!",
                                        value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
                                    }
                                })} 
                        className={styles.form_container_input}         
                        type="password" placeholder='Ввeдите пароль' />
                    </label>
                </> 
                    :
                <>
                    <label className={styles.form_container_label}>
                        <span className='login-container__form__errors'>{errors.email && errors.email.message}</span> 
                        
                        <input {...register("email", {
                                    required : {
                                        message: "Заполните поле",
                                        value: true
                                    },
                                    pattern : {
                                        message: "Заполните поле правильно",
                                        value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                    } 
                                })}  
                        className={styles.form_container_input} 
                        type="email" placeholder='Введите Email' />
                    </label>

                <label className={styles.form_container_label}>
                    <span className='login-container__form__errors'>{errors.password && errors.login.password}</span> 
                   
                    <input {...register("password", {
                                required : {
                                    message: "Заполните поле",
                                    value: true
                                },
                                maxLength : {
                                    message: "Максимальное число символов 10",
                                    value: 10 
                                }, 
                                pattern : {
                                    message: "Пароль  должен содержать не мение 8 символов, заглавную букву, число!",
                                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
                                }
                            })} 
                    className={styles.form_container_input}         
                    type="password" placeholder='Ввeдите пароль' />
                </label>
                </>
                }

                <DownLoadBtn />   
              
                <label className={styles.form_container_label}>                                     
                    <button 
                        className={styles.form_container_btn} 
                        type="submit">
                            {
                                location.pathname === "/register" ?
                                "Зарегистрироваться" :
                                "Войти" 
                            }                            
                    </button>
                </label>

                <p>
                    {
                        location.pathname === "/register" ? 
                            <>У меня уже есть аккаунт чтобы <Link to="/login" className='register-container__form__link'>войти</Link></> 
                            : <>Ещё нет аккаунта ? <Link to="/register" className='register-container__form__link'>Зарегистрироваться</Link></>
                    }
                </p>
            </form>
        </div>
    )
}

export default Form;