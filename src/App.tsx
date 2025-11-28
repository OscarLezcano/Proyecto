import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./components/MainLayout";
import Sales from "./pages/Sales";
import Clients from "./pages/Clients";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route element={<MainLayout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
