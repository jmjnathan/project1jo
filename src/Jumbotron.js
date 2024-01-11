const Jumbotron = () => {
    return (
    <div className="text-white py-12 h-96">
        <div className="container mx-auto flex items-center ml-20">
            <div className="flex space-x-72"></div>
            <div className="ml-6 text-left">
                <h3 className="text-3xl font-semibold mb-4 text-gray-500">I'm a </h3>
                <h1 className="text-7xl font-semibold mb-4 text-white font-serif uppercase">Front-end</h1>
                <h1 className="text-7xl font-semibold mb-4 text-white font-serif uppercase">Software</h1>
                <h1 className="text-7xl font-semibold mb-4 text-white font-serif uppercase">Developer</h1>
                <button className="bg-gradient-to-r from-blue-300 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white p-2 rounded uppercase mt-4 w-52">Previous Project</button>
            </div>
        </div>
    </div>
    );
};

export default Jumbotron;
