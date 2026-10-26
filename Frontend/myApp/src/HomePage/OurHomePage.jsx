// This page is created by Jitendra and link created also
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import image1 from "../assets/Student.png";
import Videoes from "../assets/videosong.mp4";
// import image2 from "../assets/FourBanda.png"
import "./Home.css";
function OurHomePage() {
  return (
    <div>
      <img id="imgSetup" src={image1} alt="img of students" />

      <p>Animated Video will be dislplay here related to this website </p>

      <div className="video1">
        <video controls>
          <source src={Videoes} type="video/mp4"></source>
        </video>
      </div>

      <div id="ExploreButton">
        <Link to="/Subject">EXPLORE NOW</Link>
      </div>
      {/* <div id="AddingImage">
            <img id="imgSetup" src={image2} alt="img of students" />

      </div> */}
    </div>
  );
}

export default OurHomePage;
