// This page is created by Jitendra and link created also
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Videoes from "../assets/videosong.mp4";
import "./Home.css";
function OurHomePage() {
  return (
    <div>
      <h1 style={{ textAlign: "center", backgroundColor: "pink" }}>This is our Home Page</h1>

      <h1>Animated Video will be dislplay here related to this website </h1>

      <div className="video1">
        <video controls>
          <source src={Videoes} type="video/mp4"></source>
        </video>
      </div>

      <div id="ExploreButton">
        <Link to="/Subject">EXPLORE NOW</Link>
      </div>
    </div>
  );
}

export default OurHomePage;
