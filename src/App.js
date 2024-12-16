import './App.css';
import About from './components/About';
import Contect from './components/Contect';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Resume/>
      <Contect/>
      <Footer/>
    </div>
  );
}

export default App;
