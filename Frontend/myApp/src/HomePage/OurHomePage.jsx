// This page is created by Jitendra and link created also
//import { Link } from "react-router-dom";
import Videoes from "../assets/videosong.mp4";
import "./Home.css"
function OurHomePage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>This is our Home Page</h1>
      {/* <Link to="/english">Go to English</Link>
      <br />
      <Link to="/hindi">Go to Hindi</Link> */}
      <h1>The video element</h1>

      <div className="video1">
        <video controls>
          <source src={Videoes} type="video/mp4"></source>
        </video>
      </div>

          <button className="homeButton">Explore Now</button>
          <div>
            <footer id="footer1">
              <h1>This is footer section</h1>
            </footer>
          </div>
      </div>
      );
}

      export default OurHomePage;
