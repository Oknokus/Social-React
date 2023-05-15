import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';

import { useContext } from 'react';

import {CustomContext} from "../../hoockHelper/Context"


import styles from './Form.module.css';


const Form = () => {
    const{registerUser} = useContext(CustomContext);

    const {
        register,
        handleSubmit,
            formState: {
                errors
        }
    } = useForm({mode: "onblur"});

    return (
        <div className={styles.form_container}>
            <form onsubmit={handleSubmit(gitregisterUser)} noValidate>
                <label>
                    <span className='login-container__form__errors'>{errors.login && errors.login.message}</span> 
                  
                    <input {...register("login", {
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
                    type="text" placeholder='Ввeдите Логин' />
                </label>

                <label>
                    <span className='login-container__form__errors'>{errors.login && errors.login.message}</span> 
                    
                    <input {...register("email", {
                                required : {
                                    message: "Заполните поле",
                                    value: true
                                },
                                maxLength : {
                                    message: "Максимальное число символов 10",
                                    value: 10 
                                },
                                pattern : {
                                    message: "Заполните поле правильно",
                                    value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                } 
                            })}  
                    type="email" placeholder='Введите Email' />
                </label>

                <label>
                    <span className='login-container__form__errors'>{errors.login && errors.login.message}</span> 
                  
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
                                    message: "Минимальное число символов 3",
                                    value: 3
                                }
                            })}  
                    type="text" placeholder='Введите дату Рождения' />
                </label>

                <label>
                    <span className='login-container__form__errors'>{errors.login && errors.login.message}</span> 
                   
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
                                    message: "Парол  должен содержать не мение 8 символов, заглавную букву, число!",
                                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
                                }
                            })}  
                    type="password" placeholder='Ввeдите пароль' />
                </label>

                <label>                                     
                    <button type="submit">Зарегистрироваться</button>
                </label>
               
            </form>
        </div>
    )
}

export default Form;