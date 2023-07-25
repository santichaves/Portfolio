import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Proyects from './Components/Proyects/Proyects';
import Contact from './Components/Contact/Contact';
import SpaceMusic from './Music/SpaceMusic- Audio Hertz.mp3'


function App() {
  
  return (


    <div className="App">
        <BrowserRouter>
        <button>
                <audio autoPlay controls className='musicplayer'> {/* Utilizamos la clase "music-player" */}
                    <source src={SpaceMusic} type="audio/mpeg" />
                </audio>
            </button>
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
