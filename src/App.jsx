import React from 'react';
import Login from './pages/Login/Login.jsx';
import Chat from './pages/Chat/Chat.jsx';
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate.jsx';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  console.log("App component is rendering");
  return (
    <>      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/profile' element={<ProfileUpdate />}/>
      </Routes>
    </>

  )
}

export default App