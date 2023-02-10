import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Nabvar';
import Top from './Components/Top';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App" class="bg-base-site min-h-screen">
      <Navbar/>
      <Top/>
      <AboutMe/>
      <Skills/>
    </div>
    
  );
}

export default App;
