import { useState } from "react";
import Login from "./components/Login";
import Home from "./pages/Home";

function App() {
	// Podriamos poner *localStorage.get("isLogged") ?? false* en lugar de simplemente false
	// para que quede logueado
	const [logged, setLogged] = useState(false);
	if (!logged) {
		return <Login onLogin={setLogged} />;
	}
	return <Home />;
}

export default App;
