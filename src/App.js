import { Router } from "@reach/router";
import React, { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AllPhotographsScreen from "./Screens/AllPhotographsScreen";
import ContactScreen from "./Screens/ContactScreen";
import FilterPhotosPage from "./Screens/FilterPhotosPage";
import LandingScreen from "./Screens/LandingScreen";
import PaymentScreen from "./Screens/PaymentScreen";

function App() {
  const [Display, setDisplay] = useState("false");

  return (
    <div className="App">
      <Header display={Display} setDisplay={setDisplay} />
      <Router>
        <LandingScreen path="/" />
        <AllPhotographsScreen path="/all-photos" />
        <ContactScreen path="/contact-page" />
        <FilterPhotosPage path="/:country" />
        <PaymentScreen path="payment-page" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
