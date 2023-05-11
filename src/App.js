import { Routes, Route } from "react-router-dom";

import Layout  from "./layout";
import Home  from "./pages/Home";
import Friends  from "./pages/Friends";
import Login  from "./pages/Login";
import Register  from "./pages/Register";
import MyProfile  from "./pages/MyProfile";

import index from "./index.css"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="" element={<Home/>}/>
        <Route path="friends" element={<Friends/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="myprofile" element={<MyProfile/>}/>    
      </Routes>
     
    </>
  )
}

export default App;
