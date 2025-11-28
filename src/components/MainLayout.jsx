import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const MainLayout = () => {
	return (
		<>
			<NavBar />
			{/* Outlet renderiza el componente hijo de la ruta actual (Home, About, etc.) */}
			<div className="content-container">
				<Outlet />
			</div>
		</>
	);
};

export default MainLayout;
