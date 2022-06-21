import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack"
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
      <h2>Stack</h2>
      <Stack />
      <h2>What I've Done</h2>
      <Background />
      <Footer />
    </div>
  );
}

export default App;
