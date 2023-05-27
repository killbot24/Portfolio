
import React, { useState, useEffect } from "react";
import ExperianceCard from './Modals/Experiance/ExperianceCards';
function AboutMe() {


    return (
        <div id='AboutMe' className="bg-gray-900 text-white py-10 lg:py-20">
            <div class="w-full max-w-5xl mx-auto px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <div class="flex flex-col justify-center">
                        <h1 class="text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
                        <p class="text-lg leading-7 mb-6 lg:mb-8">Hello, I'm Thomas Burke, a recent graduate passionate about entrepreneurship and innovation. I'm proud to have achived stage 2 of the Enterprise Ireland Student Awards our group was the only one in the school of science part of our University  , showing my dedication to these interests.
                            As a freelance developer for the past two years, I've specialized in Java development and website design</p>
                        <a href="#Contact" class="bg-green-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300">Contact Me</a>
                    </div>
                    <div class="flex justify-center items-center">
                        <img src="/FacePic.jpg" alt="Thomas Burke" class="rounded-full h-64 w-64 object-cover object-middle mx-auto lg:h-80 lg:w-80 shadow-xl" />



                    </div>
                </div>
                <div class="mt-16 mb-8">
                    <h2 class="text-4xl lg:text-5xl font-bold text-center">Experience</h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-6">

                        <div class="flex bg-gray-800 bg-opacity-70 rounded-lg shadow-md p-6">
                            <div class="w-full">
                                <h3 class="text-xl font-bold mb-2">Fullstack Software Engineer</h3>
                                <h4 class="text-gray-500 text-sm mb-4">Dapper Fox Group</h4>

                            </div>
                            <div class="w-1/4 flex justify-end h-fit">
                                <div class="bg-gray-200 rounded-md p-2">
                                    <p class="text-gray-800 text-xs">2023 -Present</p>
                                </div>
                            </div>
                        </div>


                        <div class="flex bg-gray-800 bg-opacity-70 rounded-lg shadow-md p-6">
                            <div class="w-full">
                                <h3 class="text-xl font-bold mb-2">Admin</h3>
                                <h4 class="text-gray-500 text-sm mb-4">Dapper Fox Group</h4>
    
                            </div>
                            <div class="w-1/4 flex justify-end h-fit">
                                <div class="bg-gray-200 rounded-md p-2">
                                    <p class="text-gray-800 text-xs">2019 -Present</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex bg-gray-800 bg-opacity-70 rounded-lg shadow-md p-6">
                            <div class="w-full">
                                <h3 class="text-xl font-bold mb-2">Software Engineer</h3>
                                <h4 class="text-gray-500 text-sm mb-4">Dapper Fox Group</h4>

                            </div>
                            <div class="w-1/4 flex justify-end h-fit">
                                <div class="bg-gray-200 rounded-md p-2">
                                    <p class="text-gray-800 text-xs">2020 -2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-16 mb-8">
                    <h2 class="text-4xl lg:text-5xl font-bold text-center">Education</h2>
                    <div class="grid lg:grid-cols-1 gap-8 lg:gap-12 mt-8">
                        <div class="flex flex-col justify-center">
                            <h3 class="text-2xl font-bold mb-2">Atlantic Technological University</h3>
                            <p class="text-lg leading-7 mb-2">Computing and Digital media</p>
                            <p class="text-md leading-7 mb-6">Grade: 2:1</p>
                        </div>

                    </div>
                    <div class="">
                        <h1 class="text-4xl lg:text-2xl font-bold text-center">Achivements</h1>
                        <div class=" bg-gray-800 bg-opacity-70 rounded-lg shadow-md p-6">
                            <h3 class="text-xl text-center font-bold mb-2">Student Enterprise Awards</h3>
                            <p>Achived stage 2 of Ireland student Enterprise Awards. With my groups game metaevil a self aware game that made fun that it was a game. Built as a rpg with 2 bosses built useing cutom mechanics</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-900 py-8">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl font-bold text-center mb-4">Skills</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div class=" bg-gray-800 bg-opacity-70 rounded-lg shadow-md p-6">
                            <h3 class="text-xl font-bold mb-2">Web Design</h3>
                            <ul class="list-disc list-inside">
                                <li>UI/UX Design</li>
                                <li>Wireframing</li>
                                <li>Responsive Design</li>
                            </ul>
                        </div>


                        <div class="bg-gray-800 bg-opacity-70 rounded-lg shadow-md p-6">
                            <h3 class="text-xl font-bold mb-2">Front-end Development</h3>
                            <ul class="list-disc list-inside">
                                <li>HTML5/CSS3/Tailwind</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>


                        <div class="bg-gray-800 bg-opacity-70 rounded-lg shadow-md p-6">
                            <h3 class="text-xl font-bold mb-2">Backend Development</h3>
                            <ul class="list-disc list-inside">
                                <li>Node.js</li>
                                <li>Next.js</li>
                                <li>MySQL</li>
                                <li>Java</li>
                            </ul>
                        </div>
                        <div class="bg-gray-800 bg-opacity-70 rounded-lg shadow-md p-6">
                            <h3 class="text-xl font-bold mb-2">Other Skills</h3>
                            <ul class="list-disc list-inside">
                                <li>Customer Service</li>
                                <li>Project Mangment</li>
                                <li>Software Testing</li>
                                <li>Organization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );


}

export default AboutMe; // Don�t forget to use export default!