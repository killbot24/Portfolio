import React, { Component } from 'react';

function MetaEvil_Modal() { 
  
 return (
    <div className='mt-auto'>
    
    <button data-modal-target="MetaEvilModal" data-modal-toggle="MetaEvilModal" className=' text-white font-bold py-2 px-4 hover:bg-slate-500  border-b-4 rounded' type="button">
      Show More
    </button>
    
 
    <div id="MetaEvilModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div class="relative w-full h-full max-w-2xl md:h-auto">
            
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        MetaEvil
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                
                <div class="p-6 space-y-6">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Game designed in ATU with a group this is a rpg game that jokes about the fact it is a game. The bosses  will poke fun at the player if they have been defeated before. The player can buy new swords and potions. 
                        <a href='https://chickon98.itch.io/metaevil'>Itch.io</a>
                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0rdKCGFzOHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="ShopAppModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
                 </div>
            </div>
        </div>
    </div>
    </div>
);


}

export default MetaEvil_Modal // Don�t forget to use export default!