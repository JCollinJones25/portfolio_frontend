import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";;

function App() {

  const URL = 'https://collins-portfolio-spring2022.herokuapp.com/'

  return (
    <div className="App">
      <Header />
      <About/>
      <Projects/>
      <Footer />
    </div>
  );
}

export default App;
