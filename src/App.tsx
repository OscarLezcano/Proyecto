import { useState } from "react";
import Login from "./components/Login";
import Home from "./pages/Home";

function App() {
	const [token, setToken] = useState<string>(
		localStorage.getItem("token") ?? ""
	);
	if (token === "") {
		return <Login onLogin={setToken} />;
	}
	return <Home />;
}

export default App;
