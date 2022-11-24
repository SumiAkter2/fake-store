import logo from './logo.svg';
import './App.css';
import Stores from './components/Stores/Stores';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Stores></Stores>
    
    </div>
  );
}

export default App;
