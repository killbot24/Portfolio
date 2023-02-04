import React, { Component } from 'react';

function Navbar() { 
 return (
 

   <nav id="Sections" class="  mx-auto px-8 py-4 md:flex md:items-center md:justify-between text-white bg-gray-900">


   <div class="space-y-2 md:hidden">
  <div class="w-8 h-0.5 bg-gray-600"></div>
  <div class="w-8 h-0.5 bg-gray-600"></div>
  <div class="w-8 h-0.5 bg-gray-600"></div>
  </div>
<div class="nav hidden space-x-8 md:flex">
  <a class="hover:text-lime-500 mr-5" href="#home">Home</a>
  <a class="hover:text-lime-500 mr-5" href="#aboutme">About Me</a>
  <a class="hover:text-lime-500 mr-5" href="#skills">Skills</a>
  <a class="hover:text-lime-500 mr-5" href="#contact">Portfoilio</a>
  <a class="hover:text-lime-500 mr-5" href="#about">Contact</a>
  </div>
  </nav>
  
  

);
function hamburger() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
}

export default Navbar; // Don�t forget to use export default!