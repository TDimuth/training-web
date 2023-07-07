import React, { useState } from "react";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import "./App.css";
import Main from "./pages/Main";
import Signin from "./pages/Signin";


function App() {
  
  const [name, setName] = useState('');

  const nameHandler = (name) => {
    console.log(name)
    setName(name)
  }

  

  return (
    <Router> 
        <Routes>
        <Route path="/" element={<Signin nameHandler={nameHandler} />} />
        <Route path="/home"  element={<Main name={name} />}/>
        </Routes>
      </Router>
    
  )
}

export default App;

