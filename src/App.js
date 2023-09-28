import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import FogROS2Page from "./pages/papers/FogROS2Page";
import FogROS2SkyPage from "./pages/papers/FogROS2-SkyPage";
import FogROS2LSPage from "./pages/papers/FogROS2-LSPage";
import FogROS2SGCPage from "./pages/papers/FogROS2-SGCPage";
import FogROSPage from "./pages/papers/FogROSPage";

function App() {
  return (
    <Router>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fogros" element={<FogROSPage />} />
            <Route path="/fogros2" element={<FogROS2Page />} />
            <Route path="/fogros-sky" element={<FogROS2SkyPage />} />
            <Route path="/fogros-ls" element={<FogROS2LSPage />} />
            <Route path="/fogros-sgc" element={<FogROS2SGCPage />} />

          </Routes>
        </div>
      </Router>
  );
}

export default App;
