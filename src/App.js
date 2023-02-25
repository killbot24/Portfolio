import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Nabvar';
import Top from './Components/Top';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Portfolio from './Components/PortFolio';
import SideBar from './Components/SideBar';
function App() {
  return (
    <div className="App" class="bg-gradient-to-r from-gray-700 to-gray-900 min-h-screen">
      <Navbar/>
      <Top/>
      <AboutMe/>
      <Portfolio/>
    </div>
    
  );
}

export default App;
