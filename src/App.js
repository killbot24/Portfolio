import logo from './logo.svg';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './Components/Nabvar';
import Top from './Components/Top';
import AboutMe from './Components/AboutMe';
import Portfolio from './Components/PortFolio';
import Contact from './Components/Contact'
function App() {
  let particles = [];

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.vx = Math.random() * 2 - 1;
  this.vy = Math.random() * 2 - 1;
  this.radius = Math.random() * 2 + 1;
}

Particle.prototype.update = function() {
  this.x += this.vx;
  this.y += this.vy;
  if (this.x < -50) this.x = window.innerWidth + 50;
  if (this.x > window.innerWidth + 50) this.x = -50;
  if (this.y < -50) this.y = window.innerHeight + 50;
  if (this.y > window.innerHeight + 50) this.y = -50;
};

for (let i = 0; i < 100; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  particles.push(new Particle(x, y));
}

  return (
    <div className="App" class="bg-gradient-to-r from-gray-700 to-gray-900 min-h-screen font-sans">
      <Analytics />
      <Navbar />

      <AboutMe />
      <Portfolio />
      <Contact />

    </div>

  );
}

export default App;
