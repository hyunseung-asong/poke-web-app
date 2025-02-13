import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
// import Type from "./pages/Type";

function App() {
    return (
        <Router basename="/poke-web-app">
            <Routes>
                <Route path="/" element={<Pokemon />} />
                {/* <Route path="/" element={<Pokedex />} /> */}
                {/* <Route path="/pokemon" element={<Pokemon />} /> */}
                {/* <Route path="/type" element={<Type />} /> */}
            </Routes>
        </Router>
    );
}

export default App;