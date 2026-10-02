// This page is created by Jitendra and link created also
import { Link } from "react-router-dom";

function OurHomePage() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>This is our Home Page</h1>
      <Link to="/english">Go to English</Link>
      <br />
      <Link to="/hindi">Go to Hindi</Link>
    </div>
  );
}

export default OurHomePage;
