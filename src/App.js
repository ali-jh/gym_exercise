import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Home, ExerciseDetail } from "./pages";
import { Navbar, Footer } from "./components";
function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
