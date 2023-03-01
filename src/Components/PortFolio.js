import React, { Component } from 'react';
import Breakit_Modal from './Modals/Projects/Breakit_Modal';
import ChatFilter_Modal from './Modals/Projects/ChatFilter_Modal';
import MetaEvil_Modal from './Modals/Projects/MetaEvil_Modal';
import ShopApp_Modal from './Modals/Projects/ShopApp_Modal';
import Unamed_Modal from './Modals/Projects/Unnamed_Modal';

function Portfolio() { 
  
 return (

<div id='Portfolio' class="Portfolio ">
    <h1 class="text-center text-white text-5xl">My work</h1>

    <div class=" bg-gray-700    w-3/4 mx-auto">
        <div className='pb-5 grid grid-rows-3 grid-flow-col   gap-1 mt-2 mx-auto'>
           

             <div class="bg-gray-800   py-2 px-2 text-center"> 
                <h1 className=' text-white'>Shop app</h1>
                <img className='w-3/4 mx-auto' src='https://github.com/killbot24/Website/blob/gh-pages/datarep.PNG?raw=true'></img>
                <a className=' text-blue-500' href='https://github.com/killbot24/DataRep-Project'>Github</a>
                <p className='text-white'>React based shop app</p>
                <ShopApp_Modal/>
                
            </div>

            <div class="bg-gray-800   py-2 px-2 text-center"> 
                <h1 className=' text-white'>MetaEvil</h1>
                <img className='w-3/4 mx-auto' src='https://github.com/killbot24/Website/blob/gh-pages/meta.png?raw=true'></img>
                <p className='text-white'>RPG Game developed in unity for a university project</p>
                <MetaEvil_Modal/>
            </div>

            <div class="bg-gray-800   py-2 px-2 text-center"> 
                <h1 className=' text-white'>Breakit</h1>
                <img className='w-3/4 mx-auto' src='https://github.com/killbot24/Website/blob/gh-pages/breakit1.PNG?raw=true'></img>
                <p className='text-white'>VR Game developed in unity for a university project</p>
                <Breakit_Modal/>
            </div>
            <div class="bg-gray-800   py-2 px-2 text-center"> 
                <h1 className=' text-white'>Unamed Game</h1>
                <img className='w-3/4 mx-auto' src='https://github.com/killbot24/Website/blob/gh-pages/3dworlds.PNG?raw=true'></img>
                <p className='text-white'>Game developed in unity for a university project</p>
                <Unamed_Modal/>
            </div>
            <div class="bg-gray-800   py-2 px-2 text-center"> 
                <h1 className=' text-white'>Chatfilter</h1>
                <img className='w-3/4 mx-auto' src=''></img>
                <p className='text-white'>A chat filter developed to monitor in game interactions </p>
                <ChatFilter_Modal/>
            </div>
        </div>
    </div>
    
 </div>



);


}

export default Portfolio // Don�t forget to use export default!