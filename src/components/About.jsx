import { useState, useEffect } from "react";

function About(props) {

  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch(props.URL + "about", {
      headers: {
        "Content-Type": "text/html",
        "X-Content-Type-Options": "nosniff"
      },
    });
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);


  const loaded = () => {
    return (
      <div>
        <img src={`${about.headshot1}`} alt='headshot'/>
        <h2>{about.name}</h2>
        <h3>{about.email}</h3>
        <p>{about.bio}</p>
      </div>
    );
  };

  return about ? loaded() : <h1>Please wait...</h1>;
}

export default About;
