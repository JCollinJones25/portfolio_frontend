import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Background from "./components/Background"
import Footer from "./components/Footer";

const App = () => {

  const URL = 'https://collins-portfolio-spring2022.herokuapp.com/'

  return (
    <div className="App">
      <About URL={URL}/>
      <h2>Projects</h2>
      <div className='projects'>
        <Projects URL={URL}/>
      </div>
      <Background />
      <Footer />
    </div>
  );
}

export default App;
