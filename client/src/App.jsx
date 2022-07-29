import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { setAccessToken } from "./hooks/useAuth";
import Container from "react-bootstrap/Container";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { About } from "./pages/About/About";
import { Release } from "./pages/Release/Release";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(setAccessToken());
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Container>
        <Routes>
          <Route exact path="/" element={token ? <Dashboard /> : <Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/release-notes" element={<Release />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
