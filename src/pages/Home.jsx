import TablaProducto from "../components/TablaProducto";
import BarraAnadirProducto from "../components/BarraAnadirProducto";
import Api from "../api/Api";
import { useState, useEffect } from "react";
import useMiniERP from "../hooks/useMiniERP";

function Home() {
	const [productos, setProductos] = useState([]);
	const { getProductos } = useMiniERP();
	useEffect(() => {
		getProductos().then((p) => setProductos(p ?? []));
	}, []);

	return (
		<div>
			<BarraAnadirProducto setProductos={setProductos} />
			<TablaProducto productos={productos} setProductos={setProductos} />
		</div>
	);
}

export default Home;
