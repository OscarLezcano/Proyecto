// ╭────────────────────────────────────────────────────────╮
// │                          API                           │
// ╰────────────────────────────────────────────────────────╯

// POST: ADD
// GET: GET
// PUT: UPDATE

// ==========================================================
//                           LOGIN
// ==========================================================

const baseUrl = "https://minierp.rbnetto.dev";
async function getToken(correo, contrasena) {
	const init = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email: correo, password: contrasena }),
	};
	const endpoint = baseUrl + "/api/users/users/login/";

	return await fetch(endpoint, init)
		.then((res) => res.json())
		.then((data) => data.access_token)
		.catch((err) => console.error("getToken error: ", err));
}

// ==========================================================
//                         INVENTARIO
// ==========================================================

async function getProductos() {
	const init = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	};
	const endpoint = baseUrl + "/api/inventory/products/";

	return await fetch(endpoint, init)
		.then((res) => res.json())
		.then((data) => data.results)
		.catch((err) => console.error("getToken error: ", err));
}

// * MODELO PRODUCTO
// const producto = {
// 	name: "Iphone 13 128 GB 4 Ram 5G",
// 	price: 550.04,
// 	stock_quantity: 70,
// };
async function addProducto(producto) {
	const init = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
		body: JSON.stringify(producto),
	};
	const endpoint = baseUrl + "/api/inventory/products/";

	return await fetch(endpoint, init)
		.then((res) => res.json())
		.then((data) => data)
		.catch((err) => console.error("addProducto error: ", err));
}

async function editProducto(id_producto, producto) {
	const init = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
		body: JSON.stringify(producto),
	};
	const endpoint = baseUrl + `/api/inventory/products/${id_producto}/`;

	return await fetch(endpoint, init)
		.then((res) => res.json())
		.then((data) => data)
		.catch((err) => console.error("addProducto error: ", err));
}

async function deleteProducto(id_producto) {
	const init = {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	};
	const endpoint = baseUrl + `/api/inventory/products/${id_producto}/`;

	return await fetch(endpoint, init)
		.then((res) => res.json())
		.then((data) => data)
		.catch((err) => console.error("deleteProducto error: ", err));
}

async function getProductoById(id_producto) {
	const init = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	};
	const endpoint = baseUrl + `/api/inventory/products/${id_producto}/`;

	return await fetch(endpoint, init)
		.then((res) => res.json())
		.then((data) => data)
		.catch((err) => console.error("getProductoById error: ", err));
}
