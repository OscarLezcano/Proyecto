import { useState } from "react";
import useMiniERP from "../hooks/useMiniERP";

function BarraAgregarCliente({ setClientes }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const { addCliente, getClientes } = useMiniERP();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cliente = {
            name,
            email,
            phone,
            address,
        };
        await addCliente(cliente);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        await getClientes().then((c) => setClientes(c ?? []));
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
                    type="email"
                    className="input mr-1"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="tel"
                    className="input mr-1"
                    id="phone"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />

                <input
                    type="text"
                    className="input mr-1"
                    id="address"
                    placeholder="Direccion"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />

                <button className="btn btn-primary mr-1" type="submit">
                    Añadir
                </button>
            </form>
        </div>
    );
}

export default BarraAgregarCliente;
