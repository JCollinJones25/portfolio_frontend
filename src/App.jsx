import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Background from "./components/Background";
import Recommendations from "./components/Recommendations";
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
      <h2>Accomplishments</h2>
      <Background />
      <h2>Recommendations</h2>
      <Recommendations />
      <Footer />
    </div>
  );
}

export default App;
