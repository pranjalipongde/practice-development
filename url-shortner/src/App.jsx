import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShortenForm from "./components/ShortenForm";
import ShortenedLinks from "./components/ShortenedLinks";
import Statistics from "./components/Statistics";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [shortenedLinks, setShortenedLinks] = useState([]);

  const handleShorten = (link) => {
    setShortenedLinks((previousLinks) => [link, ...previousLinks]);
  };

  return (
    <main>
      <Navbar />

      <Hero />

      <ShortenForm onShorten={handleShorten} />

      <ShortenedLinks links={shortenedLinks} />

      <Statistics />

      <CTA />

      <Footer />
    </main>
  );
}

export default App;
