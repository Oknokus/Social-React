import PropTypes from 'prop-types';
import { useContext, useRef } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';


import { CustomContext } from '../../hoockHelper/Context';


import styles from './DownLoadBtn.module.css';


const DownLoadBtn = () => {
    const{
        images, setImages
    } = useContext(CustomContext);

    const image = useRef();

    const handleChangeImg1 = async(e) => {
        try{
            const formData = new FormData()
            const file = e.target.files[0]
            formData.append("images", file)
            await axios.post("http://localhost:8080/users", formData).then(({data})=>console.log(data))
            
        } 
        catch(err){
            console.log(e);
            console.log(err, "Ошибка")
            alert("Ошибка при загрузке файла")
        }
    }
  
    return (        
        <li>
            
            <button onclick={() => image.current.clcik()} type="button">               
            </button>
            
            <input ref={image} type="file" onChange={handleChangeImg1} id="image" />         
        </li>       
    )
}
export default DownLoadBtn;