import "./App.css";
import AllPhotographsScreen from "./Screens/AllPhotographsScreen";
import ContactScreen from "./Screens/ContactScreen";
import LandingScreen from "./Screens/LandingScreen";

function App() {
  return (
    <div className="App">
      <LandingScreen />
      <AllPhotographsScreen />
      <ContactScreen />
    </div>
  );
}

export default App;
