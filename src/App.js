import './App.css';
import Navbar from'./Navbar.js';
import Jumbotron from './Jumbotron.js';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Experience from './Experience.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App bg-[#162248]">
      <Navbar/>
      <Jumbotron/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
