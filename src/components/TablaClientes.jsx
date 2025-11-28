import { useEffect, useState } from "react";
import useMiniERP from "../hooks/useMiniERP";

function TablaClientes({ clientes, setClientes }) {
    const { deleteCliente, loading, error, getClientes } = useMiniERP();
    const [isDelete, setIsDelete] = useState(false);
    const rows = [];

    useEffect(() => {
        getClientes().then((c) => setClientes(c ?? []));
    }, [isDelete]);

    const handleDelete = async (id, name) => {
        confirm(`¿Desea eliminar a este cliente (${name})?`) &&
            setIsDelete(await deleteCliente(id));
    };

    for (const cliente of clientes) {
        const activeColor = cliente.isActive ? "text-red-600" : "text-green-600";
        rows.push(
            <tr key={cliente.id}>
                <td>{cliente.name}</td>
                <td>{cliente.email}</td>
                <td>{cliente.address}</td>
                <td className={activeColor}>{cliente.is_active ? "Activo" : "Inactivo"}</td>
                <td>{cliente.orders_count}</td>
                <td>
                    <button
                        className="btn btn-error"
                        onClick={() => handleDelete(cliente.id, cliente.name)}>
                        Eliminar
                    </button>
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
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>{error}</span>
                    </div>
                </div>
            )}
            <table className="table">
                <thead>
                    <tr>
                        <th>NOMBRE</th>
                        <th>EMAIL</th>
                        <th>DIRECCIÓN</th>
                        <th>ESTADO</th>
                        <th>ÓRDENES</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

export default TablaClientes;
