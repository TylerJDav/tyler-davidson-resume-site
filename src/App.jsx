import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import WorkExperience from "./views/WorkExperience/WorkExperience";
import Education from "./views/Education/Education";
import Footer from "./components/Footer";
import "./App.css";

import { JobsContext } from "./services/JobsContext";
import { DegreesContext } from "./services/DegreesContext";
import { useContext } from "react";

function App() {
  let jobsContext = useContext(JobsContext);

  return (
    <Router>
      <div>
        <Navbar />
        <main className="container p-3 m-3 mt-16 h-screen w-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route
              path="/work-experience"
              element={
                <WorkExperience
                  viewModel={jobsContext.viewModel}
                  api={jobsContext.api}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
