import { useState } from "react";
import Login from "./components/Login";
import Home from "./pages/Home";

function App() {
	const [logged, setLogged] = useState(false);
	if (!logged) {
		return <Login onLogin={setLogged} />;
	}
	return <Home />;
}

export default App;
