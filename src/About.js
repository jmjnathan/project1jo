import Gambar from './img/1.jpg';

const About = () => {
    return (
    <div className="flex-1 ml-28 relative flex items-center h-auto">
        <div className="rounded-lg mt-20 overflow-hidden relative">
            <img src={Gambar} className="rounded-lg border-8 border-blue-500 object-cover" alt="Gambar" />
        </div>
        <div className="text-white justify-center ml-32">
            <h1 className="uppercase text-left font-semibold text-2xl">About Me</h1>
            <p class="text-left max-w-lg text-gray-400 mt-5 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu urna enim. Sed mattis massa suscipit diam convallis porttitor. Sed magna augue, finibus sollicitudin sapien sodales, pretium lacinia lacus. Ut id condimentum erat, vulputate tristique turpis. Quisque dignissim eros a cursus elementum. Maecenas rutrum mi sit amet lectus tempus, a porta purus facilisis. Etiam sollicitudin sagittis nisl nec ultricies. Ut vitae rhoncus tortor. Proin placerat mi eu mi ornare tincidunt. Donec ornare diam lacus, vel finibus lacus maximus nec.
            </p>
                <div class="space-x-4 flex-justify-start">
                    <button class="bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white p-2 rounded uppercase w-36">
                        Hire Me
                    </button>
                    <button class="border-2 border-blue-500 text-white hover:bg-blue-500 p-2 rounded uppercase w-36">
                        Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
