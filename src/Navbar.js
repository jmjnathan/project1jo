const Navbar= ()=>{
    return(
    <nav class="bg[#162248]">
        <div class="container mx-auto flex justify-between items-center">
            <div class="text-blue-400 text-4xl font-bold ml-10">JP</div>
                <div>
                    <ul class="flex space-x-20 uppercase p-5 items-center">
                        <li><a href="#" class="text-blue-500 hover:text-gray-300">Home</a></li>
                        <li><a href="#" class="text-white hover:text-gray-300">About Me</a></li>
                        <li><a href="#" class="text-white hover:text-gray-300">Portfolio</a></li>
                        <li><a href="#" class="text-white hover:text-gray-300">Service</a></li>
                        <li><a href="#" class="text-white hover:text-gray-300">Experience</a></li>
                        <li>
                            <button class="bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white p-2 rounded uppercase">
                            Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
    );
};

export default Navbar;