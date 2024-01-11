import aws from './img/aws.png';
import css from './img/css.png';
import html from './img/html.png';
import java from './img/java.png';
import javascript from './img/javascript.png';
import nodejs from './img/nodejs.png';
import phyton from './img/phyton.png';
import react from './img/react.png';

const Experience = () => {
    return (
        <div className="mt-32 relative">
            <h1 class="text-white text-2xl uppercase font-semibold">Experience</h1>
            <div class="grid grid-rows-2 gap-4 item-center justify-center space-x-3 hover: ">
                <div className="flex space-x-44 object-center mt-10">
                    <div className="flex flex-col items-center transition-transform transform hover:scale-110 ">
                        <img src={aws} className="h-20"/>
                        <p className="text-gray-300 text-center font-semibold mt-2">AWS</p>
                    </div>
                    <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                        <img src={css} className="h-20"/>
                        <p className="text-gray-300 text-center font-semibold mt-2">CSS3</p>
                    </div>
                    <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                        <img src={react} className="h-20"/>
                        <p className="text-gray-300 text-center font-semibold mt-2">React</p>
                    </div>
                    <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                        <img src={html} className="h-20"/>
                        <p className="text-gray-300 text-center font-semibold mt-2">HTML</p>
                    </div>
                </div>

                <div className="flex space-x-44 object-center mt-5">
                    <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                        <img src={java} className="h-20"/>
                        <p className="text-gray-300 text-center font-semibold mt-2">Java</p>
                    </div>
                    <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                        <img src={javascript} className="h-20"/>
                        <p className="text-gray-300 text-center font-semibold mt-2">Javascript</p>
                    </div>
                    <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                        <img src={nodejs} className="h-20"/>
                        <p className="text-gray-300 text-center font-semibold mt-2">Node.Js</p>
                    </div>
                    <div className="flex flex-col items-center transition-transform transform hover:scale-110">
                        <img src={phyton} className="h-20"/>
                        <p className="text-gray-300 text-center font-semibold mt-2">Phyton</p>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Experience;