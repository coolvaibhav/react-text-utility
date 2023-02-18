import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
 
//import letters, {b,c } from "./module2.mjs";

import TextForm from "./components/TextForm";

// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode,setMode]= useState('light');

  const [alert,setAlert]= useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      message:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert('Dark mode activated','success');
    }
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert('Light mode activated','success');
    }
  }
  

  return (
    <>
    
    <BrowserRouter>
    <Navbar title="Marathi Quote" aboutText="About Us" mode={mode} toggleMode={toggleMode}  showAlert={showAlert}/>
    <div className="container my-3">
    <Alert alert={alert}></Alert>
      <Routes>
        <Route path="/" element={<TextForm heading="Feedback" mode={mode} showAlert={showAlert}/> } />
        <Route path="about/" element={<About></About>} />
      </Routes>
      </div>
    </BrowserRouter>
      
     
    </>
  )
}

export default App;
