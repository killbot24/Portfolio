import React, { Component } from 'react';
import ShopApp_Modal from './Modals/ShopApp_Modal';
import Unamed from './Modals/Unnamed_Modal';

function Portfolio() { 
  
 return (

<div class="Portfolio ">
    <h1 class="text-center text-white text-5xl">My work</h1>

    <div class=" bg-gray-700    w-3/4 mx-auto">
        <div className='pb-5 grid grid-rows-3 grid-flow-col   gap-1 mt-2 mx-auto'>
           

             <div class="bg-gray-800   py-2 px-2 text-center"> 
                <h1 className=' text-white'>Shop app</h1>
                <img className='w-3/4 mx-auto' src='https://github.com/killbot24/Website/blob/gh-pages/datarep.PNG?raw=true'></img>
                <a className=' text-blue-500' href='https://github.com/killbot24/DataRep-Project'>Github</a>
                <p className='text-white'>Desc of project</p>
                <ShopApp_Modal/>
                
            </div>

            <div class="bg-gray-800   py-2 px-2 text-center"> 
                <h1 className=' text-white'>MetaEvil</h1>
                <img className='w-3/4 mx-auto' src='https://github.com/killbot24/Website/blob/gh-pages/meta.png?raw=true'></img>
                <p className='text-white'>Desc of project</p>
             
            </div>

            <div class="bg-gray-800   py-2 px-2 text-center"> 
                <h1 className=' text-white'>Breakit</h1>
                <img className='w-3/4 mx-auto' src='https://github.com/killbot24/Website/blob/gh-pages/breakit1.PNG?raw=true'></img>
                <p className='text-white'>Desc of project</p>
              
            </div>
            <div class="bg-gray-800   py-2 px-2 text-center"> 
                <h1 className=' text-white'>Unamed Game</h1>
                <img className='w-3/4 mx-auto' src='https://github.com/killbot24/Website/blob/gh-pages/3dworlds.PNG?raw=true'></img>
                <p className='text-white'>Desc of project</p>
                <Unamed/>
            </div>
            <div class="bg-gray-800   py-2 px-2 text-center"> 
                <h1 className=' text-white'>Chatfilter</h1>
                <img className='w-3/4 mx-auto' src=''></img>
                <p className='text-white'>Desc of project</p>
                
            </div>
        </div>
    </div>
    
 </div>



);


}

export default Portfolio // Don�t forget to use export default!