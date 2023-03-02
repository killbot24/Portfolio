import React, { Component } from 'react';

function Contact() {
  return (

    <div id='Contact' className=' mx-auto bg-slate-800'>
      <div className='w-1/2 mx-auto'>
      <h1 className='font-bold text-white text-5xl text-center'>Contact</h1>
      <div className='flex'>
      <a href='https://github.com/killbot24'>
        <img src="Github.svg" className='w-10'></img>
      </a>
      <a href='https://www.linkedin.com/in/thomas-burke-277a1b224/'>
        <img src="linkedin.svg" className='w-10'></img>
      </a>
      </div>
      <h1 className='font-bold text-white'>Email:thomasburke@thomasburke.me)</h1>
      </div>
    </div>
  );

}

export default Contact; // Don�t forget to use export default!