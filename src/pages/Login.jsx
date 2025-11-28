import useMiniERP from "../hooks/useMiniERP";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login({ email = "admin@minierp.com", contrasena = "test123456" }) {
	// Inicializo los valores del localStorage
	const { login, loading, error } = useMiniERP();

	const navigate = useNavigate();
	const [form, setForm] = useState({ email: "", password: "" });

	const handleSubmit = async (e) => {
		e.preventDefault();

		const fd = new FormData(e.currentTarget);
		const email = fd.get("email");
		const password = fd.get("contrasena");
		console.log(email, password);

		await login(email, password);
		navigate("/home"); // Redirigir si fue exitoso
	};
	let token = localStorage.getItem("token");
	if (token) {
		return <Navigate to="/home" replace />;
	} else if (loading) {
		return (
			<div className="flex justify-center items-center min-h-screen ">
				<span className="loading loading-spinner loading-xl"></span>
			</div>
		);
	}
	return (
		<div className="min-h-screen flex items-center justify-center">
			{error && (
				<div className="toast toast-top toast-end z-50">
					<div role="alert" className="alert alert-error">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 shrink-0 stroke-current"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>Usuario o contraseña incorrecto. Intentelo de nuevo.</span>
					</div>
				</div>
			)}
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
				<div className="card-body">
					<h1 className="text-2xl sm:text-3xl font-extrabold text-center">LOGIN</h1>
					<form onSubmit={handleSubmit}>
						<div>
							<label className="label" htmlFor="email">
								Correo electrónico
							</label>
							<input
								id="email"
								name="email"
								type="email"
								className="input"
								defaultValue={email}
								required
							/>
						</div>

						<div>
							<label className="label" htmlFor="contrasena">
								Contraseña
							</label>
							<input
								id="contrasena"
								name="contrasena"
								type="password"
								className="input"
								defaultValue={contrasena}
								required
							/>
						</div>

						<div className="mt-4 flex justify-center">
							<button className="btn btn-neutral" type="submit">
								Ingresar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
