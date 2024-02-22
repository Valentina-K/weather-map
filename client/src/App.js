import env from "react-dotenv";
import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

const WEATHER_KEY = env.REACT_APP_WEATHER_KEY;
function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
