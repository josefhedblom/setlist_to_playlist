import Container from "react-bootstrap/Container";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Home />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
