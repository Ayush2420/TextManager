
import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textforms from './Components/Textforms';
import About from './Components/About'
import Alert from './Components/Alert';
 
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [darkmode, setDarkMode] = useState("light");
  const [textMode, setTextMode] = useState("Dark");
  const toggleMode = () => {
    if (darkmode === "light") {
      setDarkMode("dark");
      setTextMode("Light");
      document.body.style.backgroundColor = "rgb(54, 69, 79)"
      showAlert("Dark mode enabled", "success")
      //document.title="TextManager-Dark-mode"
    }
    else {
      setDarkMode("light");
      setTextMode("Dark");
      document.body.style.backgroundColor = "white"
      showAlert("Light mode enabled", "success")
    }
  }
  return (
    <>
       
        
            <Navbar tittle="TextManager" mode={darkmode} toggleMode={toggleMode} textMode={textMode} />
            <Alert alert={alert} />
              <div className='container '>
          
             <Textforms showAlert={showAlert} mode={darkmode} heading="Enter the text to analyze" />
         
            
            {/* <About mode={darkmode}/> */}
           
              </div>
        
      

    </>
  );
}

export default App;
