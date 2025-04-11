import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import "./styles.css";
import Home from "./components/Home";
// Portfolio_and_below
import {Portfolio_and_below} from "./components/portfolio_and_below.jsx";
import Footer from "./components/footer.jsx";


function App() {
  return (
    <div id="home">
      <Header />
      <Home />
     {/* Portfolio_and_below */}
     <Portfolio_and_below />
     <Footer/>
    </div>
  );
}

export default App;
