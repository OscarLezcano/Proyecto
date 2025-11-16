import Api from "../api/Api";

function Login({ email = "admin@minierp.com", contrasena = "test123456" }) {
	return (
		<>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					const fd = new FormData(e.currentTarget);
					const email = String(fd.get("email") ?? "");
					const password = String(fd.get("contrasena") ?? "");
					// Guarda el token el localStorage
					// ! Estaria lindo que mostrase un error
					localStorage.setItem("token", await Api.getToken(email, password));
					console.log("Token guardado :)");
				}}
			>
				<div>
					<label htmlFor="email">Correo electrónico</label>
					<input
						id="email"
						name="email"
						type="email"
						defaultValue={email}
						required
					/>
				</div>

				<div>
					<label htmlFor="contrasena">Contraseña</label>
					<input
						id="contrasena"
						name="contrasena"
						type="password"
						defaultValue={contrasena}
						required
					/>
				</div>

				<div>
					<button type="submit">Ingresar</button>
				</div>
			</form>
		</>
	);
}

export default Login;
