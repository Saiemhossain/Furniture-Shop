
import './About.css'
import chairs from '../assets/chairs.png'
import cabinates from '../assets/cabinets.png'
import lamp from '../assets/lamps.png'
const About = () => {
  return (
    <div id="about" className="wrapper about-area">
      <div className="about-content">
        <h2>Featured collection</h2>
        <p>
          Duis enim fermentum id et molestie arcu sagittis, sapien turpis
          praesent consectetur dolor lobortis posuere adipiscing
        </p>
        <div className="about-img">
          <div className="img-part">
            <img src={chairs} alt="chair image" />
            <h4>Chair</h4>
          </div>
          <div className="img-part">
            <img src={cabinates} alt="chair image" />
            <h4>Cabinet</h4>
          </div>
          <div className="img-part">
            <img src={lamp} alt="chair image" />
            <h4>Lamp</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About