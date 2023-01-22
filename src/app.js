import Header from "./components/Header.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackFrom from "./components/FeedbackForm";
import AboutPage from "./Pages/AboutPage.jsx";
import AboutIconLink from "./components/AboutIconLink.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext.js";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackFrom />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}
export default App;
