import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home/Home";
import { setAccessToken } from "./hooks/useAuth";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(setAccessToken());
  });
  return (
    <>
      <Navbar />
      <Container>
        <Home token={token} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
