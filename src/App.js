import './App.css';
import About from './components/About';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className="container-fluid p-0">
        <About/>
        <hr className='m-0'/>
        <Skills/>
        <hr className='m-0'/>
        <Experience/>
        <hr className='m-0'/>
        <Projects/>
        <hr className='m-0'/>
        <Education/>
        <hr className='m-0'/>
        <Certifications/>
      </div>
    </div>
  );
}

export default App;
