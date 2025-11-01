import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Portfolio from "./pages/Portfolio";
import Preloader from "./components/Preloader";

// =============================
// Animated Routes
// =============================
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/career"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Careers />
            </motion.div>
          }
        />
        <Route
          path="/portfolio"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Portfolio />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// =============================
// App Component
// =============================
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader ONLY if we are on home route
    if (location.pathname === "/") {
      const timer = setTimeout(() => setLoading(false), 4000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  return loading ? <Preloader /> : <AnimatedRoutes />;
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
