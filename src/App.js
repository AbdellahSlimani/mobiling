import About from "./components/About";
import Agreement from "./components/Agreement";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App relative">
      <Navbar />
      <Hero />
      <Agreement />
      <About />
      <Footer />
    </div>
  );
}

export default App;
