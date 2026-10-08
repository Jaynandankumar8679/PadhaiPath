import React from "react";
//Discuss about it this is our actual home page
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OurHomePage from "./HomePage/OurHomePage";
import Register from "./Login/Register";
import Login from "./Login/UserLogin";
import Navbar from "./Navbar/Navbar";
import Download from "./PageTab/Download";
import Subject from "./PageTab/Subject";
import English from "./SideBar/English";
import Hindi from "./SideBar/Hindi";
import Sanskrit from "./SideBar/Sanskrit";
import ComputerScience from "./PageTab/ComputerScience";
function App() {
  return (
    <div style={{ marginTop: "80px" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/English" element={<English />} />
          <Route path="/Hindi" element={<Hindi />} />
          <Route path="/Sanskrit" element={<Sanskrit />} />
          <Route path="/Download" element={<Download />} />
          <Route path="/Subject" element={<Subject />} />
          <Route path="/LandingAtHomePage" element={<OurHomePage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ComputerScience" element={<ComputerScience />} />
        </Routes>
      </BrowserRouter>
      <footer id="footer1" style={{backgroundColor:"green",height:"500px"}}>
        <h1>This is footer section</h1>
      </footer>
    </div>
  );


}

export default App;
