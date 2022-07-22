import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login/Login";
import { setAccessToken } from "./hooks/useAuth";
import { Dashboard } from "./pages/Dashboard/Dashboard";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(setAccessToken());
  });
  return (
    <>
      <Navbar />
      <Container>{token ? <Dashboard /> : <Login />}</Container>
      <Footer />
    </>
  );
}

export default App;
