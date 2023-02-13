import React, { Component, useState } from 'react';
import ProgrammingLan from './Modals/ProgrammingLan';


function Skills() { 

  
 return (
 
<div class="Skills ">
    <div class=" What-I-Do mx-auto w-1/2  text-white">
        <h1 class="text-center text-lg">What I do.</h1>
        <div class="flex justify-evenly gap-2 ">
             {/* Rename these later to something more correct */}
        <div class="What1 bg-zinc-800 rounded shadow-lg w-1/3">
            <img class="h-auto " src="/img/code.svg"></img>
            
        </div>

        <div class="What1 bg-zinc-800 rounded shadow-lg  w-1/3">
            <img class="h-auto " src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png"></img>
            
            
        </div>

        <div class="What1 bg-zinc-800 rounded shadow-lg w-1/3 ">
            <img></img>
            <p>tt</p>
            
        </div>
        </div>
        <h1 class="text-center bg-blue-600  mt-5">Skills</h1>
         {/* This is only visable on large screens */}
        <div class="Skill_Showcase bg-zinc-900 max-w-full w-full 2xl:flex">  

        <div class="Programing  mx-auto 2xl:w-1/4 py-5 px-5 my-5 rounded">
        <h1 class=" bg-blue-600 2-full 2xl:w-2/3 text-center py-1 px-3 rounded mx-auto">Programming</h1>
            <h1 class="bg-slate-500 w-2/3 text-center py-1 px-3 rounded mx-auto mt-1 ">Java</h1>
            <h1 class="bg-slate-500 w-2/3 text-center py-1 px-3 rounded mx-auto mt-1">JavaScript</h1>
            <h1 class="bg-slate-500 w-2/3 text-center py-1 px-3 rounded mx-auto mt-1">React</h1>
            <h1 class="bg-slate-500 w-2/3 text-center py-1 px-3 rounded mx-auto mt-1">PHP</h1>
            <h1 class="bg-slate-500 w-2/3 text-center py-1 px-3 rounded mx-auto mt-1">HTML</h1>
        </div>

        <div class="Styleing  mx-auto 2xl:w-1/4 py-5 px-5 my-5 rounded ">
        <h1 class=" bg-blue-600 w-2/3 text-center py-1 px-3 rounded mx-auto">Styleing</h1>
            <h1 class="bg-slate-500 w-2/3 text-center py-1 px-3 rounded mx-auto mt-1">Css</h1>
            <h1 class="bg-slate-500 w-2/3 text-center py-1 px-3 rounded mx-auto mt-1">Tailwind Css</h1>

        </div>

        <div class="database  mx-auto 2xl:w-1/4 py-5 px-5 my-5 rounded ">
        <h1 class=" bg-blue-600 w-2/3 text-center py-1 px-3 rounded mx-auto">DataBases</h1>
            <h1 class="bg-slate-500 w-2/3 text-center py-1 px-3 rounded mx-auto mt-1">MYSQL</h1>
            <h1 class="bg-slate-500 w-2/3 text-center py-1 px-3 rounded mx-auto mt-1">NoSQL</h1>
 
        </div>

        </div>
         {/* This is only visable on phones tablets */}
         
        
        </div>
   
</div>
);


}

export default Skills; // Don�t forget to use export default!