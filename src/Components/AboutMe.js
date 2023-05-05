
import React, { useState, useEffect } from "react";
import ExperianceCard from './Modals/Experiance/ExperianceCards';
function AboutMe() {


    return (
        <div id='AboutMe' className="bg-gray-900 text-white py-10 lg:py-20">
            <div class="w-full max-w-5xl mx-auto px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <div class="flex flex-col justify-center">
                        <h1 class="text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
                        <p class="text-lg leading-7 mb-6 lg:mb-8">Hi, I'm Thomas Burke, and I'm a recent graduate with a passion for entrepreneurship and innovation. I'm thrilled to have advanced to stage 2 of the Enterprise Ireland Student Awards, which demonstrates my commitment to pursuing these interests.</p>
                        <p class="text-lg leading-7 mb-6 lg:mb-8">Over the past two years, I've honed my skills as a freelance developer, specializing in Java development and website design. This experience has not only expanded my technical knowledge but has also allowed me to develop critical thinking skills and a strong work ethic.</p>
                        <p class="text-lg leading-7 mb-6 lg:mb-8">What excites me most is the opportunity for continuous learning and personal development. I'm always eager to take on new challenges and bring my enthusiasm and abilities to any project or team. I look forward to connecting with you and exploring how I can help make a positive impact through my work</p>
                        <a href="#Contact" class="bg-green-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300">Contact Me</a>
                    </div>
                    <div class="flex justify-center items-center">
                    <img src="/FacePic.jpg" alt="Thomas Burke" class="rounded-full h-64 w-64 object-cover object-middle mx-auto lg:h-80 lg:w-80 shadow-xl" />



                    </div>
                </div>
                <h2 class="text-4xl lg:text-5xl font-bold mt-16 mb-8 text-center">Experience</h2>
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 ">
                    <div class="flex flex-col justify-center">
                        <h3 class="text-2xl font-bold mb-2">Dapper Fox Group</h3>
                        <ul class="list-disc text-lg leading-7 mb-6 lg:mb-8">
                            <li>Full Stack Developer (2023 - Present)</li>
                            <li>Software Engineer (2020 - 2022)</li>
                            <li>Admin (2019 - 2023)</li>
                        </ul>
                    </div>  </div>
            </div>
        </div>




    );


}

export default AboutMe; // Don�t forget to use export default!