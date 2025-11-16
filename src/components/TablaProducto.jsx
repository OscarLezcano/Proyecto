//import { JSX } from "react";
import { useEffect, useState } from "react";
import Api from "../api/Api";

function TablaProducto() {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		Api.getProductos().then((p) => setProductos(p ?? []));
	}, []);

	const rows = [];
	for (const producto of productos) {
		rows.push(
			<tr key={producto.id}>
				<td>{producto.id}</td>
				<td>{producto.name}</td>
				<td>{producto.price}</td>
				<td>{producto.stock_quantity}</td>
				<td>NADA</td>
			</tr>
		);
	}
	return (
		<div className="min-h-screen flex items-center justify-center m-15">
			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>NOMBRE</th>
						<th>PRECIO</th>
						<th>STOCK</th>
						<th>ACCION</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		</div>
	);
}

export default TablaProducto;
