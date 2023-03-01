import React, { Component } from 'react';
import Atu_Modal from './Modals/Education/Atu_Modal';

function AboutMe() { 
  
 return (

<div id='AboutMe' class="Aboutme bg-gray-800 ">
  <h1 class="capitalize text-center text-white">About me</h1>
   <div class="pb-5 lg:grid lg:grid-rows-1 lg:grid-flow-col sm:block  gap-4 mt-2  w-3/4 mx-auto ">

<div class="col-start-1 col-span-1">
<img class=" mb-5" src="face.jfif"></img>

</div>

<div class="col-start-2 col-span-1  text-white  bg-slate-700"> 
<p class=" px-2 mb-5 py-2">I am a recent graduate who has completed an honours degree with second-class honours from Galway Mayo Institute of Technology now Atlantic Technological University. During my study, I and my team achieved stage 2 of enterprise student awards with our game called MetaEvil. While doing my study I did some freelance work at dapper fox where I worked as an admin this role took on a wide range of responsibilities from customer support representative to systems admin. One of my main achievements during my time there developed an automated chat filter that cuts down on toxic behaviour by %90. 
 Excited to take the next step in my career!</p>
  
</div>
  


<div id="Exp" class=" bg-slate-700   rounded col-start-3 row-span-1 drop-shadow-2xl  h-full   text-white">
    <h2 class="text-lg px-5">Education</h2>

    <div class=" bg-zinc-800 mt-2 mx-1 pt-2 px-2  " id="box1"> 

        <h5 class="bg-green-700 w-fit py-0.5 px-1 text-sm   ">2018-2021</h5>
        <h3 class=" text-sm ">Digital media and computeing (Honors) At GMIT/ATU</h3>
        <p class=" w-fit px-2 py-1">Grade: 2:1</p> 
    </div>
    <h2 class="text-lg px-5">Experiance</h2>

<div class=" bg-zinc-800 mt-2 mx-1 pt-2 px-2  " id="box1"> 
    <h5 class="bg-green-700 w-fit py-0.5 px-1 text-sm  ">2019-2023</h5>
    <h5 class=" text-sm">Admin for Dapper fox group</h5>
    <p class=" w-fit px-2 py-1 "></p>
</div>

<div class=" bg-zinc-800 mt-2 mx-1 pt-2 px-2  " id="box1"> 
    <h5 class="bg-green-700 w-fit py-0.5 px-1 text-sm  ">2020-2023</h5>
    <h5 class=" text-sm">Software engineer for Dapper fox group</h5>
    <p class=" w-fit px-2 py-1 "></p>
</div>
</div>
</div>

<h1 class="text-center text-white text-5xl">Skills</h1>

<div class=" lg:flex lg:justify-evenlyl gap-1 lg:w-3/4  mx-auto bg-slate-700 px-1 py-1 mt-5 grid grid-cols-4">

        
       
            <p class="bg-slate-500   text-center py-1 px-1 rounded   mt-1 ">Java</p>
            <p class="bg-slate-500   text-center py-1 px-1 rounded  mt-1">JavaScript</p>
            <p class="bg-slate-500  text-center py-1 px-1 rounded  mt-1">React</p>
            <p class="bg-slate-500  text-center py-1 px-1 rounded  mt-1">PHP</p>
            <p class="bg-slate-500  text-center py-1 px-1 rounded  mt-1">HTML</p>

            <p class="bg-slate-500  text-center py-1 px-1 rounded  mt-1 ">Css</p>
            <p class="bg-slate-500  text-center py-1 px-1 rounded  mt-1">Tailwind Css</p>
            <p class="bg-slate-500  text-center py-1 px-1 rounded  mt-1">MYSQL</p>
            <p class="bg-slate-500  text-center py-1 px-1 rounded  mt-1">NoSQL</p>
            <p class="bg-slate-500  text-center py-1 px-1 rounded  mt-1">Unity</p>
            <p class="bg-slate-500  text-center py-1 px-1 rounded  mt-1">UE5</p>
        </div>
        </div>





);


}

export default AboutMe; // Don�t forget to use export default!