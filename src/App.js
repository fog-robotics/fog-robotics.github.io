import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import FogROSPage from "./pages/papers/FogROSPage";

function App() {
  return (
    <Router>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fogros" element={<FogROSPage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
