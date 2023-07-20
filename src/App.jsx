import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Proyects from './Components/Proyects/Proyects';
import Contact from './Components/Contact/Contact';
import Music from './Music/Music.mp3'


function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
        
        <audio autoPlay loop>
              <source src={Music} type='audio/mpeg' />
            </audio>
          
          <Routes>
            
            <Route path= "/" element ={<Home/>}/>
            <Route path= "/About" element ={<About/>}/>
            <Route path= "/Proyects" element ={<Proyects/>}/>
            <Route path= "/Contact" element ={<Contact/>}/>
          </Routes>
    
        </BrowserRouter>
    </div>
  );
}

export default App;
