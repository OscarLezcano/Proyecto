//import { JSX } from "react";
import { useEffect, useState } from "react";
import ModalEditarProducto from "./ModalEditarProducto";
import Api from "../api/Api";

function TablaProducto({ productos, setProductos }) {
	const handleDelete = async (id) => {
		const isDelete = await Api.deleteProducto(id);
		if (isDelete) {
			Api.getProductos().then((p) => setProductos(p ?? []));
		} else {
			alert("No se pudo eliminar el producto.");
		}
	};

	const rows = [];
	for (const producto of productos) {
		let stockColor = "";
		if (producto.stock_quantity >= 0 && producto.stock_quantity <= 10) {
			stockColor = "text-red-500";
		} else if (producto.stock_quantity <= 99) {
			stockColor = "text-yellow-500";
		} else {
			stockColor = "text-green-600";
		}

		rows.push(
			<tr key={producto.id}>
				<td>{producto.id}</td>
				<td>{producto.name}</td>
				<td>{producto.price}$</td>
				<td className={stockColor}>{producto.stock_quantity}</td>
				<td>
					<button
						className="btn btn-warning mr-1"
						onClick={() =>
							document
								.querySelector(`dialog[idproducto="${producto.id}"]`)
								.showModal()
						}
					>
						Editar
					</button>
					<button
						className="btn btn-error"
						onClick={() => handleDelete(producto.id)}
					>
						Eliminar
					</button>
					<ModalEditarProducto
						idproducto={producto.id}
						producto={producto}
						setProductos={setProductos}
					/>
				</td>
			</tr>
		);
	}
	return (
		<div className="ml-15 mr-15 mt-10">
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
