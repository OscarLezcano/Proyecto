import Api from "../api/Api";

function Login({
	email = "admin@minierp.com",
	contrasena = "test123456",
	onLogin,
}) {
	// Genero un token vacio, por las dudas (a nadie le gusta esperar un str y recivir un null)
	localStorage.setItem("token", "");
	localStorage.setItem("isLogged", "false");
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
				<div className="card-body">
					<h1 className="text-2xl sm:text-3xl font-extrabold text-center">
						LOGIN
					</h1>
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							const fd = new FormData(e.currentTarget);
							const email = String(fd.get("email") ?? "");
							const password = String(fd.get("contrasena") ?? "");

							// Obtengo la Api y si no se consigue muestra una alerta
							const token = await Api.getToken(email, password);
							if (!token) {
								alert("No se pudo obtener el token");
								return;
							}

							// Si el logueo es exitoso
							localStorage.setItem("token", token);
							localStorage.setItem("isLogged", "true");
							onLogin(true); // Para mostrar el home
						}}
					>
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
