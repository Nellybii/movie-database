import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MoviesList from "./components/Movieslist";
import NavBar from "./components/NavBar";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addmovie" element={<AddMovie />} />
         <Route path="/movieslist" element={<MoviesList />} /> 
      </Routes>
    </>
  );
}

export default App;
