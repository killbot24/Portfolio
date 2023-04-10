
import React, { useState, useEffect } from "react";
import ExperianceCard from './Modals/Experiance/ExperianceCards';
function AboutMe() {


    return (

        <div id='AboutMe' className="Aboutme from-gray-900 to-gray-700 ">

            <h1 className="capitalize text-center   font-bold text-white text-5xl">About me</h1>
            <div className="pb-5 lg:grid lg:grid-rows-1 lg:grid-flow-col sm:block  gap-4 mt-2  w-3/4 mx-auto ">

                <div className="col-start-2 col-span-1  text-white  ">
                    <p className=" px-2 mb-5 py-2">
                        I am a recent graduate who has completed an honours degree with second-class honours from Galway Mayo Institute of Technology now Atlantic Technological University. During my study,
                        I and my team achieved stage 2 of enterprise student awards with our game called MetaEvil. While doing my study I did some freelance work at dapper fox where
                        I worked as an admin this role took on a wide range of responsibilities from customer support representative to systems admin. One of my main achievements during my time
                        there developed an automated chat filter that cuts down on toxic behaviour by %90.
                        Excited to take the next step in my career!</p>

                </div>

                <div id="Exp" className=" bg-slate-700   rounded col-start-3 row-span-1 drop-shadow-2xl  h-full   text-white">
                    <h2 className="text-lg px-5">Education</h2>
                 
                    <div className=" bg-zinc-800 mt-2 mx-1 pt-2 px-2  ">

                        <h5 className="bg-green-700 w-fit py-0.5 px-1 text-sm   ">2018-2022</h5>
                        <h3 className=" text-sm ">Digital media and computeing (Honors)</h3>
                        <p className=" w-fit px-2 py-1">Grade: 2:1</p>
                    </div>
                    <h2 className="text-lg px-5">Experiance</h2>
                
                    <div className=" bg-zinc-800 mt-2 mx-1 pt-2 px-2  " >
                        <h5 className="bg-green-700 w-fit py-0.5 px-1 text-sm  ">2019-2023</h5>
                        <h5 className=" text-sm">Admin for Dapper fox group</h5>
                        <p className=" w-fit px-2 py-1 "></p>
                    </div>

                    <div className=" bg-zinc-800 mt-2 mx-1 pt-2 px-2">
                        <h5 className="bg-green-700 w-fit py-0.5 px-1 text-sm  ">2020-2022</h5>
                        <h5 className=" text-sm ">Dapper Fox Group</h5>
                        <h4 className=" text-sm">Software engineer</h4>
                        <p className=" w-fit px-2 py-1 mb-2"></p>
                    </div>
                    <div className=" bg-zinc-800 mt-2 mx-1 pt-2 px-2">
                        <h5 className="bg-green-700 w-fit py-0.5 px-1 text-sm  ">2023-Present</h5>
                        <h5 className=" text-sm">Dapper Fox Group</h5>
                        <h4 className=" text-sm">BackEnd Engineer</h4>
                        <p className=" w-fit px-2 py-1 mb-2"></p>
                    </div>
                </div>
            </div>

            <h1 class=" font-bold text-center  text-white text-5xl">Skills</h1>

            <div id='Skills' class=" lg:flex lg:justify-evenlyl gap-1 lg:w-3/4  mx-auto  px-1 py-1 mt-5 ">

                <div className='grid lg:grid-cols-11 sm:grid-cols-3 gap-5 mx-auto'>

                    <p class="bg-slate-500   text-center py-1 px-1 rounded border-r-white border  mt-1 hover:bg-blue-500 text-white font-bold">Java</p>
                    <p class="bg-slate-500   text-center py-1 px-1 rounded border-r-white border  mt-1  hover:bg-blue-500 text-white font-bold">JavaScript</p>
                    <p class="bg-slate-500  text-center py-1 px-1 rounded border-r-white border  mt-1  hover:bg-blue-500 text-white font-bold">React</p>
                    <p class="bg-slate-500  text-center py-1 px-1 rounded  border-r-white border mt-1  hover:bg-blue-500 text-white font-bold">PHP</p>
                    <p class="bg-slate-500  text-center py-1 px-1 rounded border-r-white border mt-1  hover:bg-blue-500 text-white font-bold">HTML</p>

                    <p class="bg-slate-500  text-center py-1 px-1 rounded border-r-white border  mt-1  hover:bg-blue-500 text-white font-bold">Css</p>
                    <p class="bg-slate-500  text-center py-1 px-1 rounded border-r-white border  mt-1  hover:bg-blue-500 text-white font-bold">Tailwind Css</p>
                    <p class="bg-slate-500  text-center py-1 px-1 rounded  border-r-white border mt-1  hover:bg-blue-500 text-white font-bold">MYSQL</p>
                    <p class="bg-slate-500  text-center py-1 px-1 rounded border-r-white border mt-1  hover:bg-blue-500 text-white font-bold">NoSQL</p>
                    <p class="bg-slate-500  text-center py-1 px-1 rounded border-r-white border mt-1  hover:bg-blue-500 text-white font-bold">Unity</p>
                    <p class="bg-slate-500  text-center py-1 px-1 rounded border-r-white border mt-1  hover:bg-blue-500 text-white font-bold">UE5</p>
                </div>
            </div>
        </div>





    );


}

export default AboutMe; // Don�t forget to use export default!