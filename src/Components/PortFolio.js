import React, { Component } from 'react';
import Breakit_Modal from './Modals/Projects/Breakit_Modal';
import ChatFilter_Modal from './Modals/Projects/ChatFilter_Modal';
import MetaEvil_Modal from './Modals/Projects/MetaEvil_Modal';
import ShopApp_Modal from './Modals/Projects/ShopApp_Modal';
import Unamed_Modal from './Modals/Projects/Unnamed_Modal';

function Portfolio() {

    return (

        <div id='Portfolio' class="Portfolio ">
            <h1 class="text-center font-bold text-white text-5xl">Projects</h1>

            <div class=" w-full lg:w-2/3  mx-auto">
                <div className='pb-5 grid grid-rows-6 lg:grid-rows-2 grid-flow-col   gap-5 mt-2 '>


                    <div class="bg-gray-800     flex flex-col">
                        <h1 className=' bg-slate-800 text-center font-bold text-white text-2xl'>Shop app</h1>
                      
                        <a className=' text-blue-500' href='https://github.com/killbot24/DataRep-Project'>Github</a>
                        <p className='text-white text-sm'>React based shop app developed while in ATU.</p>
                        
                        <ShopApp_Modal />

                    </div>

                    <div class="bg-gray-800     flex flex-col">
                        <h1 className=' bg-slate-800 text-center font-bold text-white text-2xl'>MetaEvil</h1>
                    
                        <a className=' text-blue-500' href='https://chickon98.itch.io/metaevil'>Itch.io</a>
                        <p className='text-white text-sm'>RPG Game developed in unity for a university project</p>
                        
                        <MetaEvil_Modal />
                    </div>

                    <div class="bg-gray-800    flex flex-col">
                        <h1 className=' bg-slate-800 text-center font-bold text-white text-2xl'>Breakit</h1>
                       
                        <a className=' text-blue-500 hidden' href=''>Itch.io</a>
                        <p className='text-white text-sm'>VR Game developed in unity for a university project</p>
                        <Breakit_Modal />
                    </div>
                    <div class="bg-gray-800    flex flex-col">
                        <h1 className=' bg-slate-800 text-center font-bold text-white text-2xl'>Unamed Game</h1>
                       
                        <a className=' text-blue-500 hidden' href='https://chickon98.itch.io/metaevil'>Itch.io</a>
                        <p className='text-white text-sm'>Game developed in unity for a university project</p>
                        <Unamed_Modal />
                    </div>
                    <div class="bg-gray-800    flex flex-col">
                        <h1 className=' bg-slate-800 text-center font-bold text-white text-2xl'>Chatfilter</h1>
                      
                        <a className=' text-blue-500' href='https://github.com/killbot24/chatfilter-spigot'>Github</a>
                        <a className=' text-blue-500 hidden' href='https://chickon98.itch.io/metaevil'>Spigot</a>
                        <p className='text-white text-sm'>A chat filter developed to monitor in game interactions </p>
                        <ChatFilter_Modal />
                    </div>
                    
                </div>
            </div>

        </div>



    );


}

export default Portfolio // Don�t forget to use export default!