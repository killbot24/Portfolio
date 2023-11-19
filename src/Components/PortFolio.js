import React, { Component } from 'react';


function Portfolio() {

  return (
    <div id='Portfolio' class="Portfolio">
      <h1 class="text-center font-bold text-white text-5xl">Projects</h1>

      <div class="w-full lg:w-2/3 mx-auto">
        <div class='pb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mt-2'>

          <div class="bg-gray-800 rounded-lg shadow-md overflow-hidden">

            <div class="px-6 py-4">
              <h1 class='bg-slate-900 rounded-md text-center font-bold text-white text-2xl mb-2'>ChatFilter</h1>
              <p class="text-white text-sm mb-4">Chatfilter is a plugin that was developed to address issues with toxic players breaking rules in an online gaming community. The plugin monitors chat and automatically deals with any violations. Chatfilter outperformed other available plugins and has made a significant positive impact in the community</p>
              <div class=' grid text-center'>


                <a className=' bg-slate-900 text-white p-2 border-sky-500 border-2 ' href='https://github.com/killbot24/sponage-chatfilter'>Sponge</a>
                <a className=' bg-slate-900 text-white p-2 border-sky-500 border-2 ' href='https://github.com/killbot24/chatfilter-spigot'>Spigot</a>


              </div>
            </div>
          </div>
          <div class="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src="/cart.png" alt="shopping car" class="w-fit m-auto h-48" />
            <div class="px-6 py-4">
              <h1 class='bg-slate-900 rounded-md text-center font-bold text-white text-2xl mb-2'>Shop App</h1>
              <p class="text-white text-sm mb-4">My shop app is a web application that was developed as part of a university project. The project aimed to develop a website using React that could take in and serve data through a REST API. This app was created with the purpose of providing users with an intuitive and user-friendly way to browse and purchase products.</p>
              <div class='grid text-center'>
                <a className=' bg-slate-900 text-white p-2 border-sky-500 border-2 ' href='https://github.com/killbot24/DataRep-Project'>
                  <i class="fab fa-github mr-2"></i> Github
                </a>


              </div>
            </div>
          </div>

          <div class="bg-gray-800 rounded-lg shadow-md overflow-hidden">
          
            <div class="px-6 py-4">
              <h1 class='bg-slate-900 rounded-md text-center font-bold text-white text-2xl mb-2'>Partner Portal</h1>
              <p class="text-white text-sm mb-4">Orginally developed for dapper fox as a green field project. Is now being developed as a persnoal project, Its Goal was to keep track of partners allowing them to manage new and existing partners. Aswell as keeping track of there expences and how much they have made in profit. </p>
              <div class='grid text-center'>
             


              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-800 rounded-lg shadow-md  w-full">

          <div class="px-6 py-4">
            <h1 class='bg-slate-900 rounded-md text-center font-bold text-white text-5xl mb-2'>Games</h1>
            <p class="text-white text-sm mb-4">Some of the games i have made, Mostly done in university</p>
            <div class='flex justify-center'>

            </div>
          </div>
        </div>
        <div class='pb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mt-2'>

          <div class="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src="/vase.png" alt="Breakit Screenshot" class="h-48 object-cover w-full" />
            <div class="px-6 py-4">
              <h1 class='bg-slate-900 rounded-md text-center font-bold text-white text-2xl mb-2'>Breakit</h1>
              <p class="text-white text-sm mb-4">"Breakit" is a unique game that was developed with a focus on AI and the satisfying experience of breaking things. The objective of the game is to break as much as possible in a museum without getting caught. It offers players an exciting and unconventional gaming experience that combines creativity and strategic thinking</p>
              <div class='flex justify-center'>

              </div>
            </div>
          </div>

          <div class="bg-gray-800 rounded-lg shadow-md overflow-hidden">

            <div class="px-6 py-4">
              <h1 class='bg-slate-900 rounded-md text-center font-bold text-white text-2xl mb-2'>Unamed Game</h1>
              <p class="text-white text-sm mb-4">
                Developed while i was at ATu. This game was designed to be simple yet entertaining. While it may look simple. The player is presented with a choice at the start and throught out the game where they can use a can of energy drink
                While this will speed the player up it will effect the ending of the game.
              </p> <div class='flex justify-center'>


              </div>
            </div>
          </div>

          <div class="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src="https://img.itch.zone/aW1hZ2UvMTQ4NTAwNS84ODU0MjE1LnBuZw==/original/VlmpCG.png" alt="MetaEvil Screenshot" class="h-48 object-cover w-full" />
            <div class="px-6 py-4">
              <h1 class='bg-slate-900 rounded-md text-center font-bold text-white text-2xl mb-2'>MetaEvil</h1>
              <p class="text-white text-sm mb-4">MetaEvil is a role-playing game that was developed by a team of students and made it to the second stage of the Enterprise Ireland Student Awards. The game takes a humorous approach, with NPCs that mock the player for their failures. The game offers a fun and engaging experience for players who enjoy RPGs, and it showcases the creativity and teamwork of the student development team.</p>
              <div class='grid text-center'>
                <a className=' bg-slate-900 text-white p-2 border-sky-500 border-2 ' href='https://chickon98.itch.io/metaevil'>
                  <i class="fas fa-gamepad mr-2"></i> Itch.io
                </a>

              </div>
            </div>
          </div>

        </div>

      </div></div>





  );


}

export default Portfolio // Don�t forget to use export default!