import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { setAccessToken } from "./hooks/useAuth";
import Container from "react-bootstrap/Container";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { About } from "./pages/About/About";
import { Release } from "./pages/Release/Release";
import { ModalProvider } from "./context/ModalProvider";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(setAccessToken());
  });

  return (
    <>
      <Navbar />
      <header id="header__title">
        <h1>
          <Link to="/">Setlist to Playlist</Link>
        </h1>
      </header>
      <Routes>
        <Route
          exact
          path="/"
          element={
            token ? (
              <ModalProvider>
                <Dashboard />
              </ModalProvider>
            ) : (
              <Login />
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/release-notes" element={<Release />} />
      </Routes>
    </>
  );
}

export default App;
