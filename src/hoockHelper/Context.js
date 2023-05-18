import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const CustomContext = createContext();

export const Context = (props) => {
    const [userState, setUserState] = useState();
    const [images, setImages] = useState();

    const navigate = useNavigate();
    const location = useLocation();
    

    const registerUser = (data) => {     
         axios.post('http://localhost:8080/register', {           
         ...data,
         categories: []        
    }).then(res => {     
        setUserState({
            token: res.data.accessToken,
            ...res.data.user
        });
        localStorage.setItem("user", JSON.stringify({
            token: res.data.accessToken,
            ...res.data.user
        }));
        navigate("layout");      
               
    }).catch(err => console.log(err))  
    }

    const loginUser = (data) => {  
        axios.post('http://localhost:8080/login', {
        ...data             
    }).then(res => {     
       setUserState({
           token: res.data.accessToken,
           ...res.data.user
       });
       localStorage.setItem("user", JSON.stringify({
           token: res.data.accessToken,
           ...res.data.user
       }));
       navigate("layout")      
              
    }).catch(err => console.log(err))  
    }
    
    const onSubmitForm = (data) => {
        if(location.pathname="/register") { 
            registerUser(data)
        } loginUser(data) 
    };
    
    const value ={
        userState,
        setUserState,
        images,
        setImages,
        onSubmitForm             
    };
 
    return <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
}