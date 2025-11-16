import { NavLink } from "react-router-dom";

function NavBar() {
	return (
		<nav className="navbar bg-base-100 shadow-sm">
			<div className="badge badge-accent mr-1 p-4 font-bold">✵ MINI ARP ✵</div>
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
