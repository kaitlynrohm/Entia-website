import { Routes, Route } from "react-router-dom";
import "./App.css";

// Importing other components
import Header from "./globalComponents/Header.tsx";

// Importing page components
import Home from "./pages/Home/Home.tsx";
import Atlas from "./pages/Atlas/Atlas.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atlas" element={<Atlas />} />
      </Routes>
    </>
  );
}

export default App;
