import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';





function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1350);
  }

  const togglemode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor= '#434343';
      showAlert('dark mode enabled','success');

    }
    else{
      setmode('light');
      document.body.style.backgroundColor= 'white';
      showAlert('light mode enabled','success')
    }
  }

  return (
    <>
     <div className="one">
    <Navbar mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className=" my-1 h-100 ">
    <Textform showAlert={showAlert} heading="Enter Your Text" mode={mode}/>
    </div >
   </div>
    <div className="container">
    <About mode={mode}/>
    </div>
   
    </>
  );
}

export default App;
