import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          {/* <Route path="/createpoll" element={<CreatePoll />} /> */}
          {/* <Route path="/pollslist" element={<PollsList />} />
          <Route path="/polldetails" element={<PollsDetails />} />
          <Route path="/polldetails/:pollId" element={<PollsDetails />} />
          <Route path="/confirmationpage" element={<ConfirmationPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
