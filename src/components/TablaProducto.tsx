import type { JSX } from "react";
import Api from "../api/Api";

async function TablaProducto() {
	const productos = await Api.getProductos();
	const rows: JSX.Element[] = [];
	for (const producto of productos) {
		rows.push(
			<tr>
				<td>${producto.id}</td>
				<td>${producto.name}</td>
				<td>${producto.price}</td>
				<td>${producto.stock_quantity}</td>
				<td>NADA</td>
			</tr>
		);
	}
	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>NOMBRE</th>
					<th>PRECIO</th>
					<th>STROCK</th>
					<th>ACCION</th>
				</tr>
			</thead>
			<tbody>${rows}</tbody>
		</table>
	);
}

export default TablaProducto;
