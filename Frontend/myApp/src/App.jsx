import React from "react";
import { Route, Routes } from 'react-router-dom';
import OurHomePage from "./HomePage/OurHomePage";
import Navbar from "./Navbar/Navbar";
import { default as English } from "./SideBar/English";
import Sanskrit from "./SideBar/Sanskrit";
import Hindi from "./SideBar/Hindi";
function App() {
    return (
     <>
        <Navbar/>
        <OurHomePage/>
        
        <Routes>
            <Route path="/english" element={<English />} />
            <Route path="/hindi" element={<Hindi />} />
            <Route path="/Sanskrit" element={<Sanskrit />}/>
        </Routes>
        {/* <SideBar/> */}
     </>
    );
}

export default App;
