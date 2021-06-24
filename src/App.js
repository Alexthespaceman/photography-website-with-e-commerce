import { Router } from "@reach/router";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AllPhotographsScreen from "./Screens/AllPhotographsScreen";
import ContactScreen from "./Screens/ContactScreen";
import FilterPhotosPage from "./Screens/FilterPhotosPage";
import LandingScreen from "./Screens/LandingScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <LandingScreen path="/" />
        <AllPhotographsScreen path="/all-photos" />
        <ContactScreen path="/contact-page" />
        <FilterPhotosPage path="/:country" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
