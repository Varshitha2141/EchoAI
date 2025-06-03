import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Chat from './pages/Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;