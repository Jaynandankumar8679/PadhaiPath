// This page is created by Jitendra and link created also
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Videoes from "../assets/videosong.mp4";
import "./Home.css";
function OurHomePage() {
  return (
    <div>
      <h1 style={{ textAlign: "center",backgroundColor:"pink"}}>This is our Home Page</h1>

      <h >Animated Video will be dislplay here related to this website </h>

      <div className="video1">
        <video controls>
          <source src={Videoes} type="video/mp4"></source>
        </video>
      </div>

      <Link to="/Subject" className="ExploreButton">Explore Now</Link>
    </div>
  );
}

export default OurHomePage;
