import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Hiw from "./pages/Hiw";
import Contact_Us from "./pages/Contact-Us";
import Connect_Wallet from "./pages/ConnectWallet";

function App() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center z-50 pointer-events-none"
        // style={{ backgroundImage: "url('/generalBg.png')" }}
      />

      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/about-us" element={<About />} />
          <Route path="/how-it-works" element={<Hiw />} />
          <Route path="/contact-us" element={<Contact_Us />} />
          <Route path="/connect-wallet" element={<Connect_Wallet />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
