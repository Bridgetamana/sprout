import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";
import PlantQuiz from "./pages/PlantQuiz";
import CareGuide from "./pages/CareGuide";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="quiz" element={<PlantQuiz />} />
        <Route path="care-guide" element={<CareGuide/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
