import { useState, useEffect } from "react";
import Links from "./Links"

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
        <img className="headshot" src="../images/headshot2.jpeg" alt='headshot'/>
        <h2>{about.name}</h2>
        <Links />
        <p className="bio">{about.bio}</p>
      </div>
    );
  };

  return about ? loaded() : <h1>Please wait...</h1>;
}

export default About;
