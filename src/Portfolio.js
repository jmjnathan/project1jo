import Porto1 from './img/porto-1.jpg';
import Porto2 from './img/porto-2.jpeg';
import Porto3 from './img/porto-3.jpeg';
import Porto4 from './img/porto-4.jpeg';

const Portfolio = () => {
    return (
    <div className="mt-32 relative justify-center">
        <h1 class="uppercase text-2xl font-semibold text-white">Portfolio</h1>
        <ul class="text-xl flex relative p-7 justify-center space-x-20">
                <li><a href="#" class="text-blue-500 hover:text-blue-300">Mobile App</a></li>
                <li><a href="#" class="text-white hover:text-blue-300">Website</a></li>
                <li><a href="#" class="text-white hover:text-blue-300">Dekstop</a></li>
                <li><a href="#" class="text-white hover:text-blue-300">Other Projects</a></li>
        </ul>
        <div class="flex-1 relative justify-start p-7 ml-24 mt-16 flex h-auto">
            <div>
                <h1 class="text-blue-400 text-2xl uppercase text-left">Project 1</h1>
                <h1 class="text-white text-2xl text-left mt-5 font-semibold">Dating Mobile App Design</h1>
                <p class="text-white max-w-lg text-left mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu urna enim. Sed mattis massa suscipit diam convallis porttitor. Sed magna augue, finibus sollicitudin sapien sodales, pretium lacinia lacus. Ut id condimentum erat, vulputate tristique turpis. Quisque dignissim eros a cursus elementum. Maecenas rutrum mi sit amet lectus tempus, a porta purus facilisis. Etiam sollicitudin sagittis nisl nec ultricies. Ut vitae rhoncus tortor. Proin placerat mi eu mi ornare tincidunt. Donec ornare diam lacus, vel finibus lacus maximus nec.</p>
                <button class="text-white mt-16 hover:text-blue-500">Read More</button> 
            </div>
        <div class="w-auto rounded-lg relative justify-center">
            <div class="w-[500px] h-[350px] border-8 rounded-lg border-blue-500 ml-[100px] transform translate-y-[90px] "></div>
                <img src={Porto1} className="rounded-lg object-cover w-[500px] h-[350px] absolute z-[1] top-0 transform translate-y-[20px] translate-x-[20px]" alt="Gambar" />
            </div>
        </div>
        <div class="flex-1 relative justify-start p-7 ml-24 mt-16 flex h-auto">
            <div class="w-auto rounded-lg  relative justify-center">
            <div class="w-[500px] h-[350px] border-8 rounded-lg border-blue-500 ml-[100px] transform translate-y-[90px] "></div>
                <img src={Porto2} className="h-[350px] w-[500px] rounded-lg absolute z-[1] transform translate-y-[-300px] translate-x-[20px] " alt="Gambar" />
            </div>
            <div class="ml-12">
                <h1 class="text-blue-400 text-2xl uppercase text-left">Project 2</h1>
                <h1 class="text-white text-2xl text-left mt-5 font-semibold">E Commerce Mobile App Design</h1>
                <p class="text-white max-w-lg text-left mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu urna enim. Sed mattis massa suscipit diam convallis porttitor. Sed magna augue, finibus sollicitudin sapien sodales, pretium lacinia lacus. Ut id condimentum erat, vulputate tristique turpis. Quisque dignissim eros a cursus elementum. Maecenas rutrum mi sit amet lectus tempus, a porta purus facilisis. Etiam sollicitudin sagittis nisl nec ultricies. Ut vitae rhoncus tortor. Proin placerat mi eu mi ornare tincidunt. Donec ornare diam lacus, vel finibus lacus maximus nec.</p>
                <button class="text-white mt-16 hover:text-blue-500">Read More</button> 
            </div>
        </div>
        <div class="flex-1 relative justify-start p-7 ml-24 mt-16 flex h-auto">
            <div>
                <h1 class="text-blue-400 text-2xl uppercase text-left">Project 3</h1>
                <h1 class="text-white text-2xl text-left mt-5 font-semibold">Fitness Mobile App Design</h1>
                <p class="text-white max-w-lg text-left mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu urna enim. Sed mattis massa suscipit diam convallis porttitor. Sed magna augue, finibus sollicitudin sapien sodales, pretium lacinia lacus. Ut id condimentum erat, vulputate tristique turpis. Quisque dignissim eros a cursus elementum. Maecenas rutrum mi sit amet lectus tempus, a porta purus facilisis. Etiam sollicitudin sagittis nisl nec ultricies. Ut vitae rhoncus tortor. Proin placerat mi eu mi ornare tincidunt. Donec ornare diam lacus, vel finibus lacus maximus nec.</p>
                <button class="text-white mt-16 hover:text-blue-500">Read More</button> 
            </div>
        <div class="w-auto rounded-lg relative justify-center">
            <div class="w-[500px] h-[350px] border-8 rounded-lg border-blue-500 ml-[100px] transform translate-y-[90px] "></div>
                <img src={Porto3} className="rounded-lg object-cover w-[500px] h-[350px] absolute z-[1] top-0 transform translate-y-[20px] transform translate-x-[20px]" alt="Gambar" />
            </div>
        </div>
        <div class="flex-1 relative justify-start p-7 ml-24 mt-16 flex h-auto">
        <div class="w-auto rounded-lg  relative justify-center">
            <div class="w-[500px] h-[350px] border-8 rounded-lg border-blue-500 ml-[100px] transform translate-y-[90px] "></div>
                <img src={Porto4} className="h-[350px] w-[500px] rounded-lg absolute z-[1] transform translate-y-[-300px] translate-x-[20px] " alt="Gambar" />
            </div>
            <div class="ml-12">
                <h1 class="text-blue-400 text-2xl uppercase text-left">Project 4</h1>
                <h1 class="text-white text-2xl text-left mt-5 font-semibold">Modelling Mobile App Design</h1>
                <p class="text-white max-w-lg text-left mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu urna enim. Sed mattis massa suscipit diam convallis porttitor. Sed magna augue, finibus sollicitudin sapien sodales, pretium lacinia lacus. Ut id condimentum erat, vulputate tristique turpis. Quisque dignissim eros a cursus elementum. Maecenas rutrum mi sit amet lectus tempus, a porta purus facilisis. Etiam sollicitudin sagittis nisl nec ultricies. Ut vitae rhoncus tortor. Proin placerat mi eu mi ornare tincidunt. Donec ornare diam lacus, vel finibus lacus maximus nec.</p>
                <button class="text-white mt-16 hover:text-blue-500">Read More</button> 
            </div>
        </div>
        <button class="bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white p-5 w-44 mt-24 rounded uppercase">
            View All
        </button>
            
    </div>
    );
};

export default Portfolio;
