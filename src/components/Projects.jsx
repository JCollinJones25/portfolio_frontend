import { useState, useEffect } from "react";

const Projects = (props) => {
  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const response = await fetch(props.URL + "projects");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  const loaded = () => {
    return projects.map((project, idx) => (
      <div key={idx} className="project">
        <h3>{project.name}</h3>
        <div className="proj-img-container">
          <img className="proj-img1" src={project.image1} alt={project.name} />
          <img className="proj-img2" src={project.image2} alt={project.name} />
          <img className="proj-img3" src={project.image3} alt={project.name} />
          <img className="proj-img4" src={project.image4} alt={project.name} />
        </div>
        <p>{project.technologies}</p>
        <div className="buttons">
          <a href={project.git} target="_blank" rel="noopener noreferrer">
            <button id="git">Github</button>
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <button id="live">Live Site</button>
          </a>
        </div>
      </div>
    ));
  };

  return projects ? (
    loaded()
  ) : (
    <div className="loading-project">
      <div id="added-text">
        <p>
        Projects are no longer live due to the increased cost of hosting, please visit GitHub for code, wireframes, and screenshots. Thanks.
        </p>
      </div>
      <div className="loading">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Projects;
