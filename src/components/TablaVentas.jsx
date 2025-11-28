import { useEffect, useState } from "react";
import useMiniERP from "../hooks/useMiniERP";

function TablaVentas({ ventas, setVentas }) {
    const { getVentas, addVenta, error } = useMiniERP();
    const rows = [];

    for (const venta of ventas) {
        rows.push(
            	<tr key={venta.id}>
				<td>{venta.customer.name}</td>
				<td>{venta.order_date}</td>
				<td>{venta.order_number}$</td>
				<td>{venta.subtotal}</td>
			</tr>
        )
    }

    return (
                <div className="ml-15 mr-15 mt-10">
			{error && (
				<div className="toast toast-top toast-end z-50">
					<div role="alert" className="alert alert-error">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<span>{error}</span>
					</div>				</div>
			)}
			<table className="table">
				<thead>
					<tr>
						<th>CLIENTE</th>
						<th>FECHA DE COMPRA</th>
						<th>NÚMERO DE ORDEN</th>
						<th>SUBTOTAL</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		</div>
    );
}

export default TablaVentas;
