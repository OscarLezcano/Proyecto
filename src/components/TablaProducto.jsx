//import { JSX } from "react";
import { useEffect, useState } from "react";
import ModalEditarProducto from "./ModalEditarProducto";
import useMiniERP from "../hooks/useMiniERP";

function TablaProducto({ productos, setProductos }) {
	const { deleteProducto, loading, error, getProductos } = useMiniERP();
	const [isDelete, setIsDelete] = useState(false);

	useEffect(() => {
		getProductos().then((p) => setProductos(p ?? []));
	}, [isDelete]);

	const handleDelete = async (id) => {
		setIsDelete(await deleteProducto(id));
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
						<span>Error al borrar el producto</span>
					</div>{" "}
				</div>
			)}
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
