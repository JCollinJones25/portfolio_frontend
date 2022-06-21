import './App.css';
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {

  const URL = 'https://collins-portfolio-spring2022.herokuapp.com/'

  return (
    <div className="App">
      <About URL={URL}/>
      <h2>Projects</h2>
      <Projects URL={URL}/>
      <Footer />
    </div>
  );
}

export default App;
