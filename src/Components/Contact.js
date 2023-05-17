import React, { Component } from 'react';

function Contact() {
  return (

    <div id="Contact" class="mx-auto bg-slate-800 py-8">
    <div class="max-w-2xl mx-auto">
      <div class="flex justify-center mb-4">
        <h1 class="text-4xl lg:text-5xl font-bold text-center text-white">Contact</h1>
        <a href="https://github.com/killbot24" target="_blank" rel="noopener noreferrer" class="mr-4">
          <img src="Github.svg" alt="GitHub" class="w-10"/>
        </a>
        <a href="https://www.linkedin.com/in/thomas-burke-277a1b224/" target="_blank" rel="noopener noreferrer">
          <img src="linkedin.svg" alt="LinkedIn" class="w-10"/>
        </a>
      </div>
      <h1 class="text-white text-center font-bold">Email: thomas@thomasburke.me</h1>
    </div>
  </div>
  
  );

}

export default Contact; // Don�t forget to use export default!