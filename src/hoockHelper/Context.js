import { createContext, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const CustomContext = createContext();

export const Context = (props) => {
    const [userState, setUserState] = useState();
    const [images, setImages] = useState();

    const navigate = useNavigate();
    const location = useLocation();

    const changeImg = (e) => {
        const inputImg = e.target;
        const file = inputImg.files[0];
    
        const personUrl = URL.createObjectURL(file);   
    
        localStorage.setItem("myPhoto", personUrl);   
    };    

    const registerUser = (data) => {      
        const imgFile = data.personImg[0]
        const img = URL.createObjectURL(imgFile);
        
         axios.post('http://localhost:8080/register', {           
        ...data,        
        url: localStorage.getItem("myPhoto")        
    }).then(res => {
        setUserState({
            token: res.data.accessToken,
            ...res.data.user,
            personImg: [
                ...img
            ]           
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
        location.pathname === "/register" ?  registerUser(data) : loginUser(data)
    };
  
    
    const value ={
        userState,
        setUserState,
        images,
        setImages,
        onSubmitForm ,
        changeImg            
    };
 
    return <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
}