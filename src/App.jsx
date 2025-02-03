import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BuildingModel from "./Components/BuildingModel";
import LandingPage from "./Components/LandingPage"; // Import the new landing page component
import FormInterface from "./Components/FormInterface"; // You can add more pages as needed

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the primary landing page route */}
        <Route path="/" element={<LandingPage />} />

        {/* Define the route for the building model page */}
        <Route path="/building-model" element={<BuildingModel />} />

        {/* Optional: Define another route for the form interface */}
        <Route path="/form-interface" element={<FormInterface />} />
      </Routes>
    </Router>
  );
}

export default App;
// function App() {
//   return (
//     <>
//       <BuildingModel />
//     </>
//   );
// }

// export default App;
