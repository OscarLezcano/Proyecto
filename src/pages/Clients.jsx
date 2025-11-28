import { useEffect, useState } from "react";
import useMiniERP from "../hooks/useMiniERP";
import TablaClientes from "../components/TablaClientes";
import BarraAgregarCliente from "../components/BarraAgregarClients";

function Clients() {
    const [clientes, setClientes] = useState([]);
    const { getClientes } = useMiniERP();

    useEffect(() => {
        getClientes().then((c) => {
            setClientes(c ?? []);
        });
    }, []);

    return (
        <div>
            <BarraAgregarCliente setClientes={setClientes} />
            <TablaClientes clientes={clientes} setClientes={setClientes} />
        </div>
    );
}

export default Clients;
