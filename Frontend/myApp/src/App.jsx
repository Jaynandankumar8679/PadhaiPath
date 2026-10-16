import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import OurHomePage from "./HomePage/OurHomePage";
import Register from "./Login/Register";
import Login from "./Login/UserLogin";
import Navbar from "./Navbar/Navbar";
import Class1 from "./PageTab/Class1";
import Class10 from "./PageTab/Class10";
import Class11 from "./PageTab/Class11";
import Class12 from "./PageTab/Class12";
import Class2 from "./PageTab/Class2";
import Class3 from "./PageTab/Class3";
import Class4 from "./PageTab/Class4";
import Class5 from "./PageTab/Class5";
import Class6 from "./PageTab/Class6";
import Class7 from "./PageTab/Class7";
import Class8 from "./PageTab/Class8";
import Class9 from "./PageTab/Class9";
import ComputerScience from "./PageTab/ComputerScience";
import Download from "./PageTab/Download";
import Graduation from "./PageTab/Graduation";
import Subject from "./PageTab/Subject";
import English from "./SideBar/English";
import Hindi from "./SideBar/Hindi";
import Sanskrit from "./SideBar/Sanskrit";
import Coding from "./TrainingPage/Coding";
import EnglishSpoken from "./TrainingPage/EnglishSpoken";
import ProblemSolving from "./TrainingPage/ProblemSolving";
import Entrepreneurship from "./TrainingPage/Entrepreneurship";
import Innovation from "./TrainingPage/Innovation";
import Dashboard from "./Login/Dashboard";
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
          <Route path="/" element={<OurHomePage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ComputerScience" element={<ComputerScience />} />
          <Route path="/Class1" element={<Class1 />} />
          <Route path="/Class2" element={<Class2 />} />
          <Route path="/Class3" element={<Class3 />} />
          <Route path="/Class4" element={<Class4 />} />
          <Route path="/Class5" element={<Class5 />} />
          <Route path="/Class6" element={<Class6 />} />
          <Route path="/Class7" element={<Class7 />} />
          <Route path="/Class8" element={<Class8 />} />
          <Route path="/Class9" element={<Class9 />} />
          <Route path="/Class10" element={<Class10 />} />
          <Route path="/Class11" element={<Class11 />} />
          <Route path="/Class12" element={<Class12 />} />
          <Route path="/Graduation" element={<Graduation />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ComputerScience" element={<ComputerScience />} />
          <Route path="/Innovation" element={<Innovation />} />
          <Route path="/Entrepreneurship" element={<Entrepreneurship />} />
          <Route path="/ProblemSolving" element={<ProblemSolving />} />
          <Route path="/EnglishSpoken" element={<EnglishSpoken />} />
          <Route path="/Coding" element={<Coding />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          
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
