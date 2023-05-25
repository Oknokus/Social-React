import axios from "axios";

export const changeImg = (e) => {
    const inputImg = e.target;
    const file = inputImg.files[0];

    const personUrl = URL.createObjectURL(file);   

    localStorage.setItem("myPhoto", personUrl);   
};