import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CustomContext = createContext();


const Context = (props) => {
    const [userState, setUserState] = useState();

    const registerUser = (data) => {
    axios.post('http://localhost:8080/register', {
        ...data,
        categories: []
    }).then(res => {
        setUserState({            
        })
        .catch(err => console.log(err))          
    })
    }

    const value = { 
        registerUser 
    };

    return <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>

}