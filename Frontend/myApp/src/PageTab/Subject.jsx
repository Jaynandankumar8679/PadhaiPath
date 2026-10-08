import React from "react";
import { Link } from "react-router-dom";

const Subject = () => {
  return (
    <div style={{ backgroundColor: "yellow" ,height:"100%"}}>
      <h1>You land at Subject page</h1>
      <Link to="/ComputerScience">Go to computer</Link>
    </div>
  );
};

export default Subject;
