import { useState, useEffect } from "react";

function About(props) {

  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch(props.URL + "about");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);


  const loaded = () => {
    return (
      <div>
        <img className="headshot" src="../images/headshot2.jpeg" alt='headshot'/>
        <h2>{about.name}</h2>
        <a href="https://github.com/JCollinJones25/disclose" target="_blank" rel="noopener noreferrer">
          <img className="github" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github logo"/>
        </a>
        <a href="https://www.linkedin.com/in/j-collin-jones/" target="_blank" rel="noopener noreferrer">
          <img className="linkedin" src="https://cdn.freebiesupply.com/logos/large/2x/linkedin-icon-1-logo-svg-vector.svg" alt="linkedin logo"/>
        </a>
        <a href="mailto:jamescollin.jones.jcj@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className="email" src="https://www.clipartmax.com/png/middle/253-2536009_wap-black-and-white-comments-white-email-symbol-transparent.png" alt="email"/>
        </a>
        <p>{about.bio}</p>
      </div>
    );
  };

  return about ? loaded() : <h1>Please wait...</h1>;
}

export default About;
