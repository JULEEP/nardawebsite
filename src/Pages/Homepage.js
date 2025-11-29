import React from "react";
import Navbar from "./Navbar";
import AIHomepage from "./AIHomepage";
import KeyFeatures from "./KeyFeatures";
import WhyChooseAlludeAI from "./WhyUs";
import AboutAlludeAI from "./AboutUs";
import ContactUs from "./ContactUs";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* All Components with IDs */}
      <div className="pt-20">
        <section id="home">
          <AIHomepage />
        </section>
        
        <section id="features">
          <KeyFeatures />
        </section>
        
        <section id="why-choose">
          <WhyChooseAlludeAI />
        </section>
        
        <section id="about">
          <AboutAlludeAI />
        </section>
        
        <section id="download">
          <DownloadApp />
        </section>
        
        <section id="contact">
          <ContactUs />
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;