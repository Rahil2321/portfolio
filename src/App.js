import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skills from './Components/skills/Skills'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
