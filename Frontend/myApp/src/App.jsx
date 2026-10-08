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
<<<<<<< Updated upstream
import Sanskrit from "./SideBar/Sanskrit";
function App() {
  return (
    <div style={{ marginTop: "80px" }}>
      <BrowserRouter>
        <Navbar />
=======
import Login from "./Login/Login";
function App() {
    return (
     <>
        <Navbar/>
        <Login/>                    
        <OurHomePage/>
          
>>>>>>> Stashed changes
        <Routes>
          <Route path="/English" element={<English />} />
          <Route path="/Hindi" element={<Hindi />} />
          <Route path="/Sanskrit" element={<Sanskrit />} />
          <Route path="/Download" element={<Download />} />
          <Route path="/Subject" element={<Subject />} />
          <Route path="/LandingAtHomePage" element={<OurHomePage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
<<<<<<< Updated upstream
      </BrowserRouter>
      <footer id="footer1" style={{backgroundColor:"green",height:"500px"}}>
        <h1>This is footer section</h1>
      </footer>
    </div>
  );
=======
        {/* <SideBar/> */}
        
     </>
    );
>>>>>>> Stashed changes
}

export default App;
