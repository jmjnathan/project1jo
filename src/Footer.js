import React from 'react';

const Footer = () => {
    return (
        <div className="mt-32">
            <div>
                <div className="relative">
                    <div className="absolute top-0 left-0 w-36 h-36 bg-blue-500 bg-opacity-30 rounded-tr-full"></div>
                    <div className="absolute top-0 left-0 w-36 h-36 bg-blue-500 bg-opacity-30 rounded-tr-full rotate-90 mt-36"></div>
                </div>
                <div className="relative">
                    <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500 bg-opacity-30 rounded-tl-full"></div>
                    <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500 bg-opacity-30 rounded-tl-full -rotate-90 mt-36"></div>
                </div>
            </div>

            <div class="h-auto p-10 bg-blue-500 bg-opacity-25 rounded-t-[250px]">
            <h1 class="text-white text-2xl uppercase">Contact</h1>
                <div class="flex-1 relative justify-start p-7 ml-24  flex h-auto">
                    <div>
                        <h1 class="text-white text-2xl text-left  font-semibold">Drop Me a Message</h1>
                        <p class="text-white max-w-lg text-left mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <div class="relative justify-start p-7 h-auto">
                            <div class= "relative justify-start flex h-auto  ">
                                <button class="bg-gradient-to-r from-blue-300 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white rounded h-14 w-14 "></button>
                                <p class="ml-5 justify-center text-white"> +62 093489032409</p>
                            </div>

                            <div class= "relative justify-start flex h-auto mt-5 ">
                                <button class="bg-gradient-to-r from-blue-300 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white rounded h-14 w-14 "></button>
                                <p class="ml-5 justify-center text-white"> heheh@gmail.com</p>
                            </div>

                            <div class= "relative justify-start flex h-auto mt-5  ">
                                <button class="bg-gradient-to-r from-blue-300 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white rounded h-14 w-14 "></button>
                                <p class="ml-5 justify-center text-white"> Jl. Pawiyatan Luhur no 5, Semarang</p>
                            </div>  
                        </div>
                        
                    </div>

            <div class="w-auto rounded-lg overflow-hidden relative justify-center">
                <div class="ml-56 rounded h-auto w-96 bg-blue-500 p-5">
                    <input
                        className="shadow appearance-none border rounded py-2 px-3 bg-black text-white leading-tight focus:outline-none focus:shadow-outline w-full"
                        id="name"
                        type="text"
                        placeholder="Name"
                        />
                    <input
                        className="shadow appearance-none border rounded py-2 px-3 mt-2 bg-black text-white leading-tight focus:outline-none focus:shadow-outline w-full"
                        id="email"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        className="shadow appearance-none border rounded py-2 px-3 mt-2 bg-black text-white leading-tight w-full h-52"
                        id="name"
                        type="text"
                        placeholder="Message"
                    />

                    <button class="bg-black text-white mt-5 p-2 justify-start rounded uppercase w-36">
                        Resume
                    </button>
                </div>
            </div>
        </div>
        <div class="border-t border-gray-500"></div>
            <footer class="mt-10">
                    <p class="text-white">2024 - Ini Footer</p>
            </footer>
            </div>
        </div>
        
    );
};

export default Footer;
