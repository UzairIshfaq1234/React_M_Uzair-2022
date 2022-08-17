import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setdarkMode] = useState('light');

  const  togglemode=()=>
  {
    if(mode==='light')
    {
      setdarkMode('dark');
      document.body.style.backgroundColor='black';
    }
    else
    {
      setdarkMode('light');
      document.body.style.backgroundColor='white';

    }

  }


  return (
    <>

      <Navbar title="DARK CODERZ-PK" userName="Muhammad Uzair" mode={mode} togglemode={togglemode}></Navbar>
      {/* <Navbar ></Navbar> */}

      <div className="container">

        <TextForm head="Enter Text For Operation!" mode={mode}></TextForm>
      </div>

    </>

  );
}

export default App;
