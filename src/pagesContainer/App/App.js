import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import LayOut from "../LayOut";
import Friends from "../Friends";
import MyProfile from "../MyProfile";
import News from "../News";
import "../../utils/i18Next";


import './App.css';

function App() {
  return (
    <Suspense fallback={'...Loading'}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='login' element={<Login />}/>
        <Route path='register' element={<Register />}/>
        <Route path='layout' element={<LayOut />}/>
        <Route path='friends' element={<Friends />}/>
        <Route path='my-profile' element={<MyProfile />}/>
        <Route path='news' element={<News />}/>
      </Routes>
    </Suspense>
  );
}

export default App;
