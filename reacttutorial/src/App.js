import { useState } from 'react';
import './App.css';
import Aleart from './components/Aleart';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setdarkMode] = useState('light');
  const [alert, setalert] = useState(null);

  const  showAlert=(typ,msg)=>
  {
    setalert({
      type:typ,
      message:msg
    })

    setTimeout(() => {

      setalert(null);
      
    }, 2000);

  }


  const  togglemode=()=>
  {
    if(mode==='light')
    {
      setdarkMode('dark');
      document.body.style.backgroundColor='black';
      showAlert('success','Dark Mode Enabled')
      document.title='Darkcoderz! Dark-mode';
    }
    else
    {
      setdarkMode('light');
      document.body.style.backgroundColor='white';
      showAlert('danger','Dark Mode Disabled')
      document.title='Darkcoderz! Light-mode';


    }

  }


  return (
    <>
      <Navbar title="DARK CODERZ-PK" userName="Muhammad Uzair" mode={mode} togglemode={togglemode}></Navbar>
      {/* <Navbar ></Navbar> */}

      <div className="container">

      <Aleart alert={alert}></Aleart>
        <TextForm showAlert={showAlert} head="Enter Text For Operation!" mode={mode}></TextForm>
      </div>

    </>

  );
}

export default App;
