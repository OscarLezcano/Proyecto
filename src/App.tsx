import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./components/MainLayout";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route element={<MainLayout />}>
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
