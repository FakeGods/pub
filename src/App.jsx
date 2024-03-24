import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
