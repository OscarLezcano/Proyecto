import { NavLink } from "react-router-dom";

function NavBar() {
	return (
		<nav className="navbar bg-base-100 shadow-sm">
			<NavLink to="/" className="btn btn-ghost text-xl">
				Home
			</NavLink>
			<NavLink to="/about" className="btn btn-ghost text-xl">
				About
			</NavLink>
		</nav>
	);
}

export default NavBar;
