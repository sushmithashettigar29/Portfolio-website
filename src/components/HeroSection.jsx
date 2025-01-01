import "./HeroSection.css";
import heroImage from "../assets/heroImage.png"
function HeroSection() {
  return (
    <div className="container">
      <div className="left-container">
        <div className="left-content">
          <h3>Hy! I Am</h3>
          <h1>Sushmitha Shettigar</h1>
          <p>Full Stack WebDeveloper&nbsp;&nbsp; | &nbsp;&nbsp;Programmer</p>
          <p className="para">Bringing creativity to code and transforming ideas into reality. Let&apos;s build the future together!</p>
        </div>
        <button id="know-more-btn">Know more</button>
      </div>
      <div className="right-container">
        <img className="heroImg" src={heroImage} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
