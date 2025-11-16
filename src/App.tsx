import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
	// Podriamos poner *localStorage.get("isLogged") ?? false* en lugar de simplemente false
	// para que quede logueado
	const [logged, setLogged] = useState(false);
	if (!logged) {
		return <Login onLogin={setLogged} />;
	}
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
	);
}

export default App;
