import React, { Component } from 'react';

function AboutMe() { 
  
 return (
 
<div class="Aboutme ">

<div id="Summary" class=" bg-slate-700 2xl:w-48 w-1/2   mt-2 mx-auto 2xl:mx-20 border-r float-none 2xl:float-left text-white">
    <img class="mx-auto" src="https://media.licdn.com/dms/image/D4D35AQE-S29IFT8HjA/profile-framedphoto-shrink_200_200/0/1648492025602?e=1676304000&v=beta&t=pUsr_7xCOJRM8sAM3N1Dfsh2rO4ggUbBNzMlIDclxlY"></img>
    <h2 class="">Hello, I am Thomas Burke. I am a gradute of GMIt where i completed a honors digital media with a 2.1</h2>
    
</div>

<div id="Exp" class=" bg-slate-700 w-1/2 mt-10 p-5 rounded  mx-auto   text-white">
    <h2>Education</h2>
    <div class=" bg-zinc-800 mt-5 w-full pt-2 px-2  " id="box1"> 
        <h5 class="bg-green-700 w-fit py-0.5 px-1 text-sm  ">2018-2021</h5>
        <h5 class=" text-sm">Digital media and computeing (Honors) At GMIT/ATU</h5>
        <p class="bg-zinc-700 w-fit px-2 py-1  mb-2 ">Test test  terst terst terst</p>
    </div>
</div>

<div id="Exp" class=" bg-slate-700 w-1/2 mt-10 p-5 rounded  mx-auto  text-white">
    <h5 class="">Experiance</h5>
    <div class=" bg-zinc-800 mt-5 w-full pt-2 px-2" id="box1"> 
        <h5 class="bg-green-700 w-fit py-0.5 px-1 text-sm ">2020-2023</h5>
        
        <h5 class=" text-sm">Dapper Fox Group</h5>
    </div>

    <div class=" bg-zinc-800 mt-5 w-full pt-2 px-2 rounded" id="box2"> 
        <h5 class="bg-green-700 w-fit py-0.5 px-1 text-sm">2019-2023</h5>
        <h5 class=" text-sm">Dapper Fox Group</h5>
    </div>
</div>
</div>

);


}

export default AboutMe; // Don�t forget to use export default!