import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
// import Header from "./elements/Header"; // Only needed if you actually want to render it inside the page

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {/* Page content goes here, not Header again if it's already in Layout */}
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
