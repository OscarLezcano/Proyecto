import { useState } from "react";
import useMiniERP from "../hooks/useMiniERP";

function ModalEditarProducto({ idproducto, producto, setProductos }) {
	const [name, setName] = useState("");
	const [cantidad, setCantidad] = useState("");
	const [precio, setPrecio] = useState("");
	const { editProducto, getProductos, loading, error } = useMiniERP()
	return (
		<dialog idproducto={idproducto} id="my_modal_3" className="modal">
			<div className="modal-box">
				<form method="dialog">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
						✕
					</button>
				</form>
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						const form = e.target;
						const fd = new FormData(form);
						const NEWproducto = {
							name: fd.get("nombre"),
							stock_quantity: parseInt(fd.get("cantidad") || "0"),
							price: parseFloat(fd.get("precio") || "0"),
						};
						await editProducto(idproducto, NEWproducto);
						getProductos().then((p) => setProductos(p ?? []));
						form.reset();
						document
							.querySelector(`dialog[idproducto="${idproducto}"]`)
							.close();
					}}
					className="space-y-4"
				>
					<div>
						<label className="label">
							<span className="label-text">Nombre</span>
						</label>
						<input
							name="nombre"
							type="text"
							required
							className="input input-bordered w-full"
							placeholder="Nombre del producto"
							defaultValue={producto.name}
						/>
					</div>

					<div>
						<label className="label">
							<span className="label-text">Cantidad</span>
						</label>
						<input
							name="cantidad"
							type="number"
							min="0"
							className="input input-bordered w-full"
							placeholder="0"
							defaultValue={producto.stock_quantity}
						/>
					</div>

					<div>
						<label className="label">
							<span className="label-text">Precio</span>
						</label>
						<input
							name="precio"
							type="number"
							min="0"
							className="input input-bordered w-full"
							placeholder="0.00"
							defaultValue={producto.price}
						/>
					</div>

					<div className="modal-action">
						<button
							type="button"
							className="btn"
							onClick={() =>
								document
									.querySelector(`dialog[idproducto="${idproducto}"]`)
									.close()
							}
						>
							Cancelar
						</button>
						<button type="submit" className="btn btn-primary">
							Guardar
						</button>
					</div>
				</form>
			</div>
		</dialog>
	);
}

export default ModalEditarProducto;
