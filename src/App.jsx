import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MoviesList from "./components/Movieslist";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieslist" element={<MoviesList />} />
      </Routes>
    </>
  );
}

export default App;
