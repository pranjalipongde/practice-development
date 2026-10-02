import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShortenForm from "./components/ShortenForm";
import ShortenedLinks from "./components/ShortenedLinks";
import Statistics from "./components/Statistics";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ShortenForm />
      <ShortenedLinks />
      <Statistics />
      <CTA />
      <Footer />
    </main>
  );
};

export default App;
