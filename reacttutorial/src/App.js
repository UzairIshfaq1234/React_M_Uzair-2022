import logo from './logo.svg';
import './App.css';

let author="Muhamamd Sudais ishfaq"

function App() {
  return (
    <>
     <nav>
      <li>Home</li>
      <li>About</li>
      <li>Login</li>
     </nav>
     
     
      <div className="navbar">{author}</div>
    </>

  );
}

export default App;
