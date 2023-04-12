
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
                    <h1 className="text-lg text-center px-5">Education</h1>
                 
                    <div className=" bg-zinc-800 mt-2 mx-1 pt-2 px-2  rounded ">

                        <h5 className="bg-green-700 w-fit py-0.5 px-1 text-sm   ">2018-2022</h5>
                        <p className=" text-sm ">Digital media and computeing (Honors)</p>
                        <p className=" w-fit px-2 py-1 text-sm">Grade: 2:1</p>
                    </div>
                    <h2 className="text-lg text-center px-5">Experiance</h2>
                
                    <div className=" bg-zinc-800 mt-2 mx-1 pt-2 px-2  rounded " >
                        <p className="bg-green-700 w-fit py-0.5 px-1 text-sm rounded ">2019-2023</p>
                        <p className=" text-sm float-right">Dapper Fox Group</p>
                        <p className=" text-sm">Admin </p>
                        <p className=" w-fit px-2 py-1 "></p>
                    </div>

                    <div className=" bg-zinc-800 mt-2 mx-1 pt-2 px-2 rounded ">
                        <h5 className="bg-green-700 w-fit py-0.5 px-1 text-sm  ">2020-2022</h5>
                        <h5 className=" text-sm float-right ">Dapper Fox Group</h5>
                        <p className=" text-sm">Software engineer</p>
                        <p className=" w-fit px-2 py-1 mb-2"></p>
                    </div>
                    <div className=" bg-zinc-800 mt-2 mx-1 pt-2 px-2 rounded ">
                        <h5 className="bg-green-700 w-fit py-0.5 px-1 text-sm  ">2023-Present</h5>
                        <h5 className=" text-sm float-right">Dapper Fox Group</h5>
                        <p className=" text-sm">Full Stack Developer</p>
                        <p className=" w-fit px-2 py-1 mb-2"></p>
                    </div>
                </div>
            </div>

            

           
        </div>





    );


}

export default AboutMe; // Don�t forget to use export default!