import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Home/>} />

        {/* Career page */}
        <Route path="/career" element={<Careers/>} />

        {/* portfolio page */}
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
    </Router>
  );
}

export default App;
