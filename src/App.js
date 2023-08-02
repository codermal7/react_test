import logo from "./logo.svg";
import "./App.css";
import Header from './Header';
import HomeSection from './HomeSection';

function App() {
  return (
    <div>
      {/* Render the Header component */}
      <Header />

      <div className="loader"></div>

      {/* Render the HomeSection component */}
      <HomeSection />
    </div>
  );
}

export default App;
