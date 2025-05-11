import "./App.css";
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import AboutUs from "./components/sections/AboutUs";
import Contact from "./components/sections/Contact";
import FeaturedCollections from "./components/sections/FeaturedCollections";
import FreeShippingVid from "./components/sections/FreeShippingVid";
import HeroSection from "./components/sections/HeroSection";
import NewIn from "./components/sections/NewIn";

function App() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <NewIn />
      <FeaturedCollections />
      <AboutUs />
      <FreeShippingVid />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
