// import logo from "./logo.svg";
import React,{ useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light'); // initial state and for darkmode
  const [alert,setAlert] = useState(null); // for alert
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  //to set the alert

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-warning');
  // }
  // const colorMode=(cls)=>{
  //   removeBodyClasses();
  //   document.body.classList.add('bg-'+cls);
  // }
  //function for color mode
  const toggleMode=()=>{
      if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor=' rgb(29, 14, 117)';
      document.body.style.color='white';
      showAlert("Dark mode enabled","success");
      // document.title ='Text-Rk dark mode';
      // setInterval(() =>{
      //   document.title = 'Rittick is awesome';
      // },1500);
      // setInterval(() =>{
      //   document.title = 'Paulami is awesome';
      // },2000)
    }else{
        setMode('light');
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        showAlert("Light mode enabled","success");
        // document.title ='Text-Rk light mode';
      }
  }
  return (
    <>
     <Router>
     <Navbar title="Text-Rk" aboutApp="About The app" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container">
        <Routes>
          <Route path="/about" element={ <About mode={mode}/>}/>
          <Route path="/" element={ <TextForm showAlert={showAlert} heading="Try Text-Rk - Word Counter, Character Counter, Remove extra spaces👇🏽" mode={mode}/>}/>
        </Routes>
     </div>
    </Router>
    </> 
  );
}

export default App;
