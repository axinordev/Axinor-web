import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Careers from "./pages/Careers";


function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Home/>} />

        {/* Career page */}
        <Route path="/career" element={<Careers/>} />
      </Routes>
    </Router>
  );
}

export default App;
