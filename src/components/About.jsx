import { useState, useEffect } from "react";
import Links from "./Links";
import Resume from "../JCJresume2022.pdf";

const About = (props) => {

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
      <div className="about">
        <div className="profile">
          <img className="headshot" src="../images/headshot4.png" alt='headshot'/>
          <h1>{about.name}</h1>
          <Links />
          <a className="resume" href={Resume} download>Download Resume</a>
        </div>
        <p className="bio">{about.bio}</p>
      </div>
    );
  };
  
  return about ? loaded() : 
    <div className="about">
      <img className="headshot" src="../images/headshot4.png" alt='headshot'/>
      <Links />
      <h3>Information Loading...</h3>
    </div>
}

export default About;
