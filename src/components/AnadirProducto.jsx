import { useState } from "react";
import Api from "../api/Api";

function AnadirProducto({ setProductos }) {
	const [name, setName] = useState("");
	const [cantidad, setCantidad] = useState("");
	const [precio, setPrecio] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const producto = {
			name: name,
			price: parseFloat(precio) || 0,
			stock_quantity: parseInt(cantidad) || 0,
		};
		await Api.addProducto(producto);
		setName("");
		setCantidad("");
		setPrecio("");
		await Api.getProductos().then((p) => setProductos(p ?? []));
	};

	return (
		<div className="m-4">
			<form onSubmit={handleSubmit} className="flex items-center">
				<input
					type="text"
					className="input mr-1"
					id="name"
					placeholder="Nombre"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>

				<input
					type="number"
					className="input mr-1"
					id="cantidad"
					placeholder="Cantidad"
					value={cantidad}
					onChange={(e) => setCantidad(e.target.value)}
					min={0}
				/>

				<input
					type="number"
					step="0.01"
					className="input mr-1"
					id="precio"
					placeholder="Precio"
					value={precio}
					onChange={(e) => setPrecio(e.target.value)}
					min={0}
				/>

				<button className="btn btn-primary mr-1" type="submit">
					Añadir
				</button>
			</form>
		</div>
	);
}

export default AnadirProducto;
