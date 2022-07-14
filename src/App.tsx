import Footer from "./components/Footer";
import Header from "./components/Header";
import Popup from "./components/Popup";
import Home from "./Home";
import "./styles/global.scss";

function App() {
  return (
    <>
      <Popup />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
