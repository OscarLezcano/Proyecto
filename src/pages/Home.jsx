import TablaProducto from "../components/TablaProducto";
import BarraAnadirProducto from "../components/BarraAnadirProducto";
import Api from "../api/Api";
import { useState, useEffect } from "react";

function Home() {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		Api.getProductos().then((p) => setProductos(p ?? []));
	}, []);

	return (
		<div>
			<BarraAnadirProducto setProductos={setProductos} />
			<TablaProducto productos={productos} setProductos={setProductos} />
		</div>
	);
}

export default Home;
