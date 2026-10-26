import React from 'react'
import "./ForClassPage.css";
import { Link } from 'react-router-dom';
const Class1 = () => {
  return (
    <div id="Class-Design">
        <Link to="/English">English</Link>
          <Link to="/Hindi">Math</Link>
          <Link to="/MatheMatics">Math</Link>
          <Link to="/Sanskrit">Sanskrit</Link>
          <Link to="/Science">Science</Link>
          <Link to="/SocialScience">SocialScience</Link>
    
    </div>
  )
}

export default Class1