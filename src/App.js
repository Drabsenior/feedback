import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";

import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import Feedbackstats from "./components/Feedbackstats";
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <div className="container">
                  <FeedbackForm />
                  <Feedbackstats />
                  <FeedbackList />
                </div>
                <AboutIconLink />
              </>
            }
          />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
