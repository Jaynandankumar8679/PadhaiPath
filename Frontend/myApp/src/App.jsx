import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Class6English from "./Class6/Class6English";
import OurHomePage from "./HomePage/OurHomePage";
import Register from "./Login/Register";
import Login from "./Login/UserLogin";
import Navbar from "./Navbar/Navbar";
import ComputerScience from "./PageTab/ComputerScience";
import Download from "./PageTab/Download";
import Subject from "./PageTab/Subject";
import English from "./SideBar/English";
import Hindi from "./SideBar/Hindi";
import Sanskrit from "./SideBar/Sanskrit";
function App() {
  return (
    <div style={{ marginTop: "70px" }}>
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
          <Route path="/Class6English" element={<Class6English />} />
          
        </Routes>
      </BrowserRouter>
      <footer id="footer1" style={{backgroundColor:"#D9A441",height:"500px"}}>
        <h1>This is footer section</h1>
        <div>
          <p href="#">New link will be generated</p> <b/>
          <p href="#">New link will be generated</p><b/>
          <p href="#">New link will be generated</p><b/>
          <p href="#">New link will be generated</p><b/>
          <p href="#">New link will be generated</p><b/>
        </div>
        <p id="Copyright">© Copyright PadhaiPath. All Rights Reserved. Designed by IT CELL OF JK Group</p>
      </footer>
    </div>
  );


}

export default App;
