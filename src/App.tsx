import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./elements/Header";
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
    </Router>
  );
}

export default App;
