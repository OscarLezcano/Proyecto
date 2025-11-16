import Api from "../api/Api";

function Login({
	email = "admin@minierp.com",
	contrasena = "test123456",
	onLogin,
}) {
	// Genero un token vacio, por las dudas (a nadie le gusta esperar un str y recivir un null)
	localStorage.setItem("token", "");
	return (
		<>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					const fd = new FormData(e.currentTarget);
					const email = String(fd.get("email") ?? "");
					const password = String(fd.get("contrasena") ?? "");

					// Si se puede guardo el token el localStorage
					const token = (await Api.getToken(email, password)) ?? "";
					if (token === "") {
						alert("No se pudo obtener el token");
					}
					localStorage.setItem("token", token);
					onLogin(token);
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
					<button className="bg-amber-950" type="submit">
						Ingresar
					</button>
				</div>
			</form>
		</>
	);
}

export default Login;
