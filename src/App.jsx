import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
import Registration from "./components/Registration";
import HackathonSchedule from "./components/HackathonSchedule";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      {/* <Registration /> */}
      <HackathonSchedule />
      <Countdown />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
