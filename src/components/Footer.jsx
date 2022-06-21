import Links from "./Links"


const Footer = () => {
    return (
      <footer className="footer">
        <h3>James Collin Jones</h3>
        <div className="footer-links">
          <Links />
        </div>
        <div className="footer-urls">
          <li>
            <a href="https://github.com/JCollinJones25" target="_blank" rel="noopener noreferrer">https://github.com/JCollinJones25</a>
            </li>
          <li>
            <a href="https://www.linkedin.com/in/j-collin-jones/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/j-collin-jones/</a>
          </li>
          <li>
            <a href="mailto:jamescollin.jones.jcj@gmail.com" target="_blank" rel="noopener noreferrer">jamescollin.jones.jcj@gmail.com</a>
          </li>
        </div>
      </footer>
    )
}

export default Footer