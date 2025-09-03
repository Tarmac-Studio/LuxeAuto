import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
