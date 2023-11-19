import logo from './logo.svg';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './Components/Nabvar';
import AboutMe from './Components/AboutMe';
import Portfolio from './Components/PortFolio';
import Contact from './Components/Contact'
function App() {


  return (
    <div className="App" class=" bg-gray-900 min-h-screen font-sans">
      <Analytics />
      <Navbar />
      <AboutMe />
      <Portfolio />
      <Contact />

    </div>

  );
}

export default App;
